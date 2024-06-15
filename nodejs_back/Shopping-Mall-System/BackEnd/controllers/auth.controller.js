import User from '../controllers/model/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { OAuth2Client } from 'google-auth-library';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const GOOGLE_CLIEMT_ID = process.env.GOOGLE_CLIEMT_ID;

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

                console.log("Email Login! Success");
                return res.status(200).json({status: "Email Login Success", user, token});
            }
        }
        throw new Error("invalid email or password");
    }catch(err)
    {
        console.log("Email Login! Fail");
        res.status(400).json({status:"Email Login Fail", error: err.message});
    }
};

authController.loginWithGoogle = async(req, res) => {
    try
    {
        const {token} = req.body;
        const googleClient = new OAuth2Client(GOOGLE_CLIEMT_ID);
        const ticket = await googleClient.verifyIdToken({idToken: token, audience: GOOGLE_CLIEMT_ID});
        const {email, name} = ticket.getPayload(); //console.log(email, name) == cksdud52017@gmail.com 박찬영
        console.log(email, name)

        let user = await User.findOne({email});
        if(!user)
        {
            //유저를 새로 생성
            console.log("Google Login => create User!");
            const randomPassword = "" + Math.floor(Math.random() * 1000000000);
            const salt = await bcrypt.genSalt(10);
            const newPassword = await bcrypt.hash(randomPassword, salt);

            user = new User({name, email, password: newPassword});
            await user.save();
        }

        //토큰 발행 리턴
        const sessionToken = await user.generateToken();

        console.log("Google Login Success");
        res.status(200).json({status:"Google Login Success", user, token: sessionToken});
    }catch(err)
    {
        console.log("Google Login Fail");
        res.status(400).json({status:"Google Login Fail", error: err.message});
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

authController.checkAdminPermission = async(req, res, next) => {
    try
    {
        const {userId} = req;
        const user = await User.findById(userId);
        if(user.level !== "admin")
            throw new Error("your not admin, No permission");

        next();
    }catch(err)
    {
        res.status(400).json({status:"checkAdminPermission Fail", error: err.message});
    }
}


export default authController;