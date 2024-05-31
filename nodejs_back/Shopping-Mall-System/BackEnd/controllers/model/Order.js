import mongoose from "mongoose";

import User from './User';
import Product from "./Product";

const Schema = mongoose.Schema;

const orderSchema = Schema({
    shipTo: { type: String, required: true },
    contact: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    userId: { type: mongoose.ObjectId, ref: User },
    status: { type: String,  default: "active", },
    items: [{
        productId: { type: mongoose.ObjectId, ref: Product},
        size: { type: String, required: true},
        qty: { type: Number, default: 1, required: true},
        price: { tpye: Number, default: 0, required: true},
    }],
},{timestamps: true});

orderSchema.methods.toJSON = function () {
    const obj = this._doc;

    delete obj.__v;
    delete obj.updataAt;
    delete obj.createAt;

    return obj;
}




const Order = mongoose.model("Order", orderSchema);
export default Order;