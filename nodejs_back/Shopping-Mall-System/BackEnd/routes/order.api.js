import express from 'express';

import orderController from '../controllers/order.controller.js';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', authController.authenticate, orderController.getOrder);
router.get('/list', authController.authenticate, authController.checkAdminPermission, orderController.getOrderList)
router.post('/', authController.authenticate, orderController.createOrder);
router.put('/', authController.authenticate, authController.checkAdminPermission, orderController.updateOrder);


export default router;