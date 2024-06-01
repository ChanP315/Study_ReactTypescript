import express from 'express';
import authController from '../controllers/auth.controller.js';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", authController.authenticate, authController.checkAdminPermission, productController.createProduct);

export default router;