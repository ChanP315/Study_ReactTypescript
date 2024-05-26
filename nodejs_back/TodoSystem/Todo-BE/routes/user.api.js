// const express = require('express');
import express from 'express';
import userController from '../apiController/user.controller.js';

const router = express.Router();

router.post('/', userController.createUser);
router.post('/login', userController.loginWithEmail);
// router.post('/', (req, res) => {
//     console.log("create user controller will be here")
//     res.send("create user controller will be here");
// });

// router.get('/', userController.getUser);

// router.put('/:id', userController.updateUser);

// router.delete('/:id', userController.deleteUser);

export default router;