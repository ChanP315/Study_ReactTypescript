// const express = require('express');
// const taskApi = require('./task.api');
import express from 'express';

import taskApi from './task.api.js';
import userApi from './user.api.js';


const indexRouter = express.Router();

indexRouter.use('/tasks', taskApi);
indexRouter.use('/user', userApi)


export default indexRouter;