import bcrypt from 'bcryptjs';

import User from './model/User.js';

const userController = {}

userController.createUser = async(req, res) => {
    try
    {
        const {email, password, name, level} = req.body;

        const user = await User.findOne({email});
        if(user) {
            throw new Error("User already exist");
        }

        const salt = await bcrypt.genSaltSync(10);
        const hash_password = await bcrypt.hash(password, salt);

        const newUser = new User({email, password: hash_password, name, level: level? level:'customer'});
        await newUser.save();

        console.log("User! createUser");
        return res.status(200).json({status: "create Success"});
    }catch(err)
    {
        console.log("User! createUser Fail");
        res.status(400).json({status: "create Fail", error: err.message});
    }
}

export default userController;