// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const indexRouter = require('./routes/index')
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

import indexRouter from './routes/index.js';

const app = express();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
console.log('PCY mongo uri: ', MONGODB_URI_PROD);
// console.log('PCY mongo port: ', process.env.PORT);
app.use(bodyParser.json());
app.use(cors());
app.use('/api', indexRouter);

// const mongoURI = 'mongodb://localhost:27017/todo_demo';
const mongoURI = MONGODB_URI_PROD;

mongoose.connect(mongoURI, {useNewUrlParser: true}).then(()=> {
    console.log('mongoose connected');
}).catch((err)=> {
    console.log("DB connection fail", err);
});




app.listen(process.env.PORT || 4000, () => { //.env.PORT
    console.log("server on Port Num : ", process.env.PORT || 4000);
});