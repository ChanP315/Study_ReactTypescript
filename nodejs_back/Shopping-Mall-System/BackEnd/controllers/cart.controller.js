import Cart from '../controllers/model/Cart.js';
import Product from './model/Product.js';

const cartController = {};

cartController.getCartItemList = async(req, res) => {
    try
    {
        const {userId} = req;
        const cart = await Cart.findOne({userId})
            .populate({path: 'items', populate: "productId", model: "Product"});
        if(!cart)
            throw new Error("유저의 카트 정보가 없습니다.");
        
        console.log("getCartItemList Success");
        res.status(200).json({status: "getCartItemList Success", cart, cartItemQty: cart.items.length});
    }catch(err)
    {
        console.log("getCartItemList Fail");
        res.status(400).json({status: "getCartItemList Fail", error: err.message});
    }
};

cartController.getCartQty = async(req, res) => {
    try
    {
        const {userId} = req;
        const cart = await Cart.findOne({userId});
        if(!cart)
            throw new Error("유저의 카트 정보가 없습니다.");
        
        console.log("getCartQty Success");
        res.status(200).json({status: "getCartItemList Success", cartItemQty: cart.items.length});
    }catch(err)
    {
        console.log("getCartQty Fail");
        res.status(400).json({status: "getCartItemList Fail", error: err.message});
    }
}

cartController.addItemToCart = async(req, res) => {
    try
    {
        const {userId} = req;
        const {productId, size, qty} = req.body;

        // 1. 유저를 가지고 카트 찾기
        let cart = await Cart.findOne({userId});
        // 1-1. 유저가 만든 카트가 없다면, 만들어주기
        if(!cart)
        {
            cart = new Cart({userId});
            await cart.save();
        }

        // 2. 이미 카트에 아이템이 들어가 있는지? TMI: productId는 === 연산이 아닌 equals함수를 사용하는데, 타입이 단순 String이나 Number가 아닌 Object이기 때문이다.
        const existItem = cart.items.find((item) => item.productId.equals(productId) && item.size === size);
        // 2-1. 아이템이 들어가 있다면 에러 문구 표시 ('이미 아이템이 카트에 있습니다')
        if(existItem)
            throw new Error("아이템이 이미 카트에 담겨 있습니다!");

        // 3. 카트에 아이템을 추가
        cart.items = [...cart.items, {productId, size, qty}];
        await cart.save();

        console.log("addItemToCart Success");
        res.status(200).json({status: "addItemToCart Success", cart, cartItemQty: cart.items.length});
    }catch(err)
    {
        console.log("addItemToCart Fail");
        res.status(400).json({status: "addItemToCart Fail", error: err.message});
    }
};

cartController.updateItemQty = async(req, res, next) => {
    try
    {
        const {userId} = req;
        const {cartInItemId, itemQty} = req.body;

        const updateCheck = await Cart.updateOne({userId, 'items._id': cartInItemId}, {$set: {"items.$.qty": itemQty}}); //TODO
        if(!updateCheck)
            throw new Error("아이템 수량 변경에 실패하였습니다.");

        console.log("updateItemQty Success");
        next();
        // res.status(200).json({status: "updateItemQty Success"});
    }catch(err)
    {
        console.log("updateItemQty Fail");
        res.status(400).json({status: "updateItemQty Fail", error: err.message});
    }
}

cartController.deleteCartItem = async(req, res, next) => {
    try
    {
        const {userId} = req;
        const {cartInItemId} = req.body;
        
        //{$pull: {items: {cartInItemId}}} 하지말고 items값에 확실하게 _id라는 것을 아래와 같이 지칭해줘야함.
        const updateCheck = await Cart.updateOne({userId}, {$pull: {items: {_id: cartInItemId}}});
        if(!updateCheck)
            throw new Error("카트에서 아이템 삭제를 실패하였습니다.");

        console.log("deleteCartItem Success");
        next();
        // res.status(200).json({status: "deleteCartItem Success", cart});
    }catch(err)
    {
        console.log("deleteCartItem Fail");
        res.status(400).json({status: "deleteCartItem Fail", error: err.message});
    }
};

export default cartController;