import Order from '../controllers/model/Order.js';
import productController from './product.controller.js';
import {ransdomStringGenerator} from '../utils/randomStringGenerator.js';

const orderController = {};

orderController.createOrder = async(req, res) => {
    try
    {
        // FE에서 데이터 보낸 것을 받아온다 { userId, totalPrice, shipTo, contact, orderList }
        const {userId} = req;
        const {shipTo, contact, totalPrcie, orderList} = req.body;

        //재고 확인 & 재고 업데이트
        const insufficientStockItems = await productController.checkItemListStock(orderList);

        // 재고가 충분하지 않는 아이템이 있었다 == Error
        if(insufficientStockItems.length > 0)
        {
            const errorMessage = insufficientStockItems.reduce((total, item)=> total += item.message, "");
            throw new Error(errorMessage);
        }

        //order를 만든다.
        const newOrder = new Order({
            userId,
            totalPrcie,
            shipTo,
            contact,
            items: orderList,
            orderNum: ransdomStringGenerator()
        });
        await newOrder.save();

        console.log("createOrder Success");
        res.status(200).json({status:"createOrder Success", orderNum: newOrder.orderNum});
    }catch(err)
    {
        console.log("createOrder Fail");
        return res.status(400).json({status:"createOrder Fail", error: err.message});
    }
}

export default orderController;