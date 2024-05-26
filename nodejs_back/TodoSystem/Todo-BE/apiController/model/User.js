import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import 'dotenv/config';
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

},{timestamps: true});

/*
핵심 포인트
화살표 함수: 자체 this 컨텍스트가 없으며, 상위 렉시컬 컨텍스트로부터 this를 상속받습니다.
일반 함수: 자체 this 컨텍스트를 가지며, 호출 방식에 따라 this가 결정됩니다.
Mongoose 스키마에서 메서드를 정의할 때,
    this를 올바르게 문서 인스턴스에 바인딩하기 위해 일반 함수를 사용하는 것이 좋습니다.
*/
//CASE 1: ArrowFunction
userSchema.methods.generateToken_Function = () => {
    const token = jwt.sign({_id: this._id}, JWT_SECRET_KEY);
    
    return token;
}
/*
  generateToken 메서드가 화살표 함수로 정의되었습니다.
  화살표 함수는 자체 this 컨텍스트를 가지지 않습니다.
    대신, 정의될 때의 상위 렉시컬 컨텍스트로부터 this를 상속받습니다.

  이 경우, this가 사용자 문서가 아닌 전역 컨텍스트나 정의되지 않은 컨텍스트를 가리키게 되어
TypeError: Cannot read properties of undefined (reading '_id') 오류가 발생합니다.
*/

//CASE 2: Function
userSchema.methods.generateToken = function() {
    const token = jwt.sign({_id: this._id}, JWT_SECRET_KEY, {expiresIn: '1d'});
    
    return token;
}
/*
  generateToken 메서드가 일반 함수로 정의되었습니다.
  일반 함수는 자체 this 컨텍스트를 가지며, 함수가 호출될 때 동적으로 설정됩니다.
    스키마 인스턴스에서 호출될 때, this는 그 인스턴스를 올바르게 가리킵니다.

  따라서 this._id에 정상적으로 접근할 수 있어 오류가 발생하지 않습니다.
*/

userSchema.methods.toJSON = function() {
  const obj = this._doc;
  delete obj.password;

  return obj;
}

const User = mongoose.model("User", userSchema);

export default User;