import User from '../controllers/model/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authController = {};

authController.loginWithEmail = async(req, res) => {
    try
    {
       const {email, password} = req.body;

       const user = await User.findOne({email});
       if(user)
        {
            const isMatch = await bcrypt.compare(password, user.password);
            
            if(isMatch) {
                //token
                const token = await user.generateToken();

                console.log("Login! Success");
                return res.status(200).json({status: "Login Success", user, token});
            }
        }
        throw new Error("invalid email or password");
    }catch(err)
    {
        console.log("Login! Fail");
        res.status(400).json({status:"Login Fail", error: err.message});
    }
}

authController.authenticate = async(req, res, next) => {
    try
    {
        const tokenString = req.headers.authorization;
        if(!tokenString)
            throw new Error("Token not found");

        const token = tokenString.replace("Bearer ", "");
        jwt.verify(token, JWT_SECRET_KEY, (error, payload) =>  {
            if(error)
                throw new Error("invalid token");

            req.userId = payload._id;
        });

        next();
    }catch(err)
    {
        res.status(400).json({status: "authenticate Fail", error: err.message});
    }
}


export default authController;