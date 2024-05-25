const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-test');

const validator = require('validator');

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                // if(!value.includes("@"))
                if(!validator.isEmail(value))
                    throw new Error("This is not an Email");
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true //앞과 뒤에 있는 공백은 지워주지만 값들 사이에 있는 공백은 지워주지 않음.
    },
    age:{
        type:Number,
        default: 0
    },
})


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


// const User = mongoose.model("user", userSchema);

// // const newUser = new User({name:'noona', email:'cypark@gmail.com', password: '12345', age:25});
// // const newUser = new User({name:'noona4', email:'c1qwezxcasd23@gmail.com', password: '12312345   a  '});
// // newUser.save().then((value)=>console.log('value : ', value));


// User.find({name: 'noona'}).select('-_id').then(value=>console.log("all value : " , value));