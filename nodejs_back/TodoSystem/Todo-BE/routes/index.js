// const express = require('express');
// const taskApi = require('./task.api');
import express from 'express';

import taskApi from './task.api.js';


const indexRouter = express.Router();

indexRouter.use('/tasks', taskApi);


export default indexRouter;