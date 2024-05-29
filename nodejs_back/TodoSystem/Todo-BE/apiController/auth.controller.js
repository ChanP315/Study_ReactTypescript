import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authController = {};
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

authController.authenticate = (req, res, next) => {
    try
    {
        const tokenString = req.headers.authorization; //Bearer asdfkmasodhgfuiawefnasdkjfn
        if(!tokenString)
            throw new Error("invalid token");

        const token = tokenString.replace("Bearer ", '');
        jwt.verify(token, JWT_SECRET_KEY, (err, payload)=>{
            if(err)
                throw new Error("invalid token");

            //res.status(200).json({status: "Auth Success", UserID: payload._id})
            req.userId = payload._id;
        });

        next();
    }catch(err)
    {
        res.status(400).json({status: "Auth Fail", message: err.message});
    }
};

export default authController;