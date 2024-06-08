import mongoose from "mongoose";

import User from './User.js';
import Product from "./Product.js";

const Schema = mongoose.Schema;

const cartSchema = Schema({
    userId: { type: mongoose.ObjectId, ref: User },
    items: [{
        productId: { type: mongoose.ObjectId, ref: Product},
        size: { type: String, required: true},
        qty: { type: Number, default: 1, required: true},
    }],
},{timestamps: true});

cartSchema.methods.toJSON = function () {
    const obj = this._doc;

    delete obj.__v;
    delete obj.updataAt;
    delete obj.createAt;

    return obj;
}




const Cart = mongoose.model("Cart", cartSchema);
export default Cart;