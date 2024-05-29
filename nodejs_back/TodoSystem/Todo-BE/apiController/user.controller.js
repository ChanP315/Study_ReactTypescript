import User from './model/User.js';
import bcrypt from 'bcryptjs';

const saltRounds = 10;


const userController = {}

userController.createUser = async(req, res) => {
    try
    {
        const {name, email, password} = req.body;

        const user = await User.findOne({email}) //{email: email}

        if(user)
        {
            throw new Error('이미 가입이 된 이메일입니다.');
        }
        
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        console.log("password hash: " , hash);

        const newUser = new User({ //{name:name, email: email, passowrd: hash};
            name,
            email,
            password:hash
        });
        await newUser.save();

        res.status(200).json({status:"create success"});
    }catch(error)
    {
        console.log(error);
        res.status(400).json({status:"create Fail", message: error.message});
    }
}

userController.loginWithEmail = async(req, res) => {
    try
    {
        const {name, email, password} = req.body;

        const user = await User.findOne({email},"-createdAt -updatedAt -__v");

        if(user)
        {
            const isMatch = bcrypt.compareSync(password, user.password);
            console.log("isMatch: ", isMatch);
            if(isMatch)
            {
                const token = user.generateToken();

                //res.status는 res.send와 달리 return 처럼 함수를 종료하지 않기에 return을 붙여야함
                return res.status(200).json({status: "loginWithEmail Success", user, token});
            }
        }

        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }catch(error)
    {
        console.log(error);
        res.status(400).json({status: "loginWithEmail Fail", message: error.message});
    }
};

userController.getUser = async(req, res) => {
    try
    {
        const {userId} = req; //req.userId;
        const user = await User.findById(userId, "-createdAt -updatedAt -__v");
        if(!user) {
            throw new Error("can not find user");
        }

        res.status(200).json({status: "getUser Success", user});
    }catch(error)
    {
        console.log(error);
        res.status(400).json({status: "getUser Fail", message: error.message});
    }
}

export default userController;