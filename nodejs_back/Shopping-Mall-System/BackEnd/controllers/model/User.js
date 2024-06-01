import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const Schema = mongoose.Schema;

const userSchema = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    name: { type: String, required: true, },
    level: {
        type: String,
        default: "customer", // 2types: customer, admin
    },
},{timestamps: true});

userSchema.methods.toJSON = function () {
    const obj = this._doc;

    delete obj.password;
    delete obj.__v;
    delete obj.updataAt;
    delete obj.createAt;

    return obj;
}

userSchema.methods.generateToken = async function() {
    const token = await jwt.sign({_id: this.id}, JWT_SECRET_KEY, {expiresIn:"1d"});

    return token;
}




const User = mongoose.model("User", userSchema);
export default User;