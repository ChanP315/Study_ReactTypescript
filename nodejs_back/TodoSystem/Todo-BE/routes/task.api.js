// const express = require('express');
import express from 'express';

import taskConroller from '../controller/task.controller.js'

const router = express.Router();

router.post('/', taskConroller.createTask);

router.get('/', taskConroller.getTask);

router.put('/:id', taskConroller.updateTask);

router.delete('/:id', taskConroller.deleteTask);

export default router;