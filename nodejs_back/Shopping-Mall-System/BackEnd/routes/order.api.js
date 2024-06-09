import express from 'express';

import orderController from '../controllers/order.controller.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/', authController.authenticate, orderController.createOrder);

export default router;