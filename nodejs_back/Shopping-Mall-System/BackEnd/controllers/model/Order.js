import mongoose from "mongoose";

import User from './User.js';
import Product from "./Product.js";
import Cart from './Cart.js';

const Schema = mongoose.Schema;

const orderSchema = Schema({
    userId: { type: mongoose.ObjectId, ref: User },
    status: { type: String,  default: "preparing" },
    totalPrice: { type: Number, required: true, default: 0 },
    shipTo: { type: Object, required: true },
    contact: { type: Object, required: true },
    orderNum: {type: String },
    items: [{
        productId: { type: mongoose.ObjectId, ref: Product},
        price: { type: Number, required: true, default: 0 },
        qty: { type: Number, required: true, default: 1 },
        size: { type: String, required: true},
    }],
},{timestamps: true});

orderSchema.methods.toJSON = function () {
    const obj = this._doc;

    delete obj.__v;
    delete obj.updataAt;
    delete obj.createAt;

    return obj;
}

orderSchema.post("save", async function () {
    // 오더를 완료했을 시에 카트를 비워주는 작업.
    const cart = await Cart.findOne({userId: this.userId});
    cart.items = [];
    cart.save();
})




const Order = mongoose.model("Order", orderSchema);
export default Order;