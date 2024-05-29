// const express = require('express');
import express from 'express';
import userController from '../apiController/user.controller.js';
import authController from '../apiController/auth.controller.js';

const router = express.Router();

router.post('/', userController.createUser);

router.post('/login', userController.loginWithEmail);

router.get("/info", authController.authenticate, userController.getUser);

export default router;