import User from '../controllers/model/User.js';
import bcrypt from 'bcryptjs';


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


export default authController;