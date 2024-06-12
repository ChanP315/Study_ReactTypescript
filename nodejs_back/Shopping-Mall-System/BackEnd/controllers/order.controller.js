import Order from '../controllers/model/Order.js';
import productController from './product.controller.js';
import {ransdomStringGenerator} from '../utils/randomStringGenerator.js';

const PAGE_SIZE = 5;
const orderController = {};

orderController.createOrder = async(req, res) => {
    try
    {
        // FE에서 데이터 보낸 것을 받아온다 { userId, totalPrice, shipTo, contact, orderList }
        const {userId} = req;
        const {shipTo, contact, totalPrice, orderList} = req.body;

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
            totalPrice,
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

orderController.getOrder = async(req, res) => {
    try
    {
        const {userId} = req;

        const order = await Order.find({userId}).populate({path: 'items', populate: "productId", model: "Product"});
        if(!order)
            throw new Error("주문 정보가 없습니다.");
        
        console.log("getOrder Success");
        res.status(200).json({status:"getOrder Success", order});
    }catch(err)
    {
        console.log("getOrder Fail");
        return res.status(400).json({status:"getOrder Fail", error: err.message});
    }
}

orderController.getOrderList = async(req, res) => {
    try
    {
        const {page, ordernum} = req.query;

        const condition = ordernum ? {orderNum: {$regex: ordernum, $options: "i"}} : {};
        let query = Order.find(condition)
            .populate({path: 'items', populate: "productId", model: "Product"})
            .populate("userId");
        
        let response = {status: "getOrderList success"};

        if(page)
        {
            query.skip((page -1) * PAGE_SIZE).limit(5);
            /* 최종 페이지 수 구하기 */
            // 디비의 데이터가 몇개인지
            const totalItemNum = await Order.find(condition).count();
            // 데이터의 총 개수 / PAGE_SIZE
            const totalPageNum = Math.ceil(totalItemNum/ PAGE_SIZE);
            response.totalPageNum = totalPageNum;
        }

        const orderList = await query.exec();
        
        response.orderList = orderList;

        console.log("getOrderList Success");
        res.status(200).json(response);
        // res.status(200).json({status:"getOrderList Success", orderList});
    }catch(err)
    {
        console.log("getOrderList Fail");
        return res.status(400).json({status:"getOrderList Fail", error: err.message});
    }
};

orderController.updateOrder = async(req, res) => {
    try
    {
        const {_id, status} = req.body;

        const order = await Order.updateOne({_id}, {$set: {status}});
        if(!order)
            throw new Error("상태 수정에 실패 하였습니다.");

        console.log("updateOrder Success");
        res.status(200).json({status:"updateOrder Success", order});
    }catch(err)
    {
        console.log("updateOrder Fail");
        return res.status(400).json({status:"updateOrder Fail", error: err.message});
    }
};

export default orderController;