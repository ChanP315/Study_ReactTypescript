// const express = require('express');
import express from 'express';

import taskController from '../apiController/task.controller.js'
import authController from '../apiController/auth.controller.js'

const router = express.Router();

router.post('/', authController.authenticate, taskController.createTask);

router.get('/', taskController.getTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

export default router;