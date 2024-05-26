// const express = require('express');
import express from 'express';
import userController from '../apiController/user.controller.js';

const router = express.Router();

router.post('/', userController.createUser);

router.post('/login', userController.loginWithEmail);

export default router;