import express from 'express';

import userController from '../controllers/user.controller.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

//회원가입
router.post("/", userController.createUser);
router.get("/info", authController.authenticate, userController.getUser)   // token이 valid한 token인지, 이 token을 가지고 유저를 찾아서 리턴

export default router;