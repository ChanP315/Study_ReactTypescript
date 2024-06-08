import express from 'express';
import authController from '../controllers/auth.controller.js';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", authController.authenticate, authController.checkAdminPermission, productController.createProduct);
router.get("/", productController.getProductList);
router.get("/:id", productController.getProductDetail);
router.put("/:id", authController.authenticate, authController.checkAdminPermission, productController.updateProduct);
router.delete("/:id", authController.authenticate, authController.checkAdminPermission, productController.deleteProduct);

export default router;