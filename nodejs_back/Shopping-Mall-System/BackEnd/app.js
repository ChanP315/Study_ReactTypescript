import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

import indexRouter from './routes/index.js';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //req.body가 객체로 인식이 된다.
app.use(cors());

app.use("/api", indexRouter);

// const mongoURI = process.env.LOCAL_DB_ADDRESS;
const mongoURI = process.env.MONGODB_ADDRESS;
console.log('PCY mongo uri: ', mongoURI);

mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(()=> console.log("mongoose connected"))
.catch((err)=> console.log("DB connection fail ", err));

app.listen(process.env.PORT || 4000, () => {
    console.log("Server on");
})