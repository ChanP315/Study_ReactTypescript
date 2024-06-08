import express from 'express';

import cartController from '../controllers/cart.controller.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', authController.authenticate, cartController.getCartItemList);
router.get('/qty', authController.authenticate, cartController.getCartQty)
router.post('/', authController.authenticate, cartController.addItemToCart);

export default router;