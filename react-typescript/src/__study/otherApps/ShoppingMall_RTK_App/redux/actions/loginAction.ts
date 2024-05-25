import { Dispatch } from "redux";
import {loginActions} from '../module/login'
import { userInfo } from "../../module/redux_module";

const logIn = (_id:string, _pw:string):any => {
    return async(dispatcher:Dispatch) => {
        const data:userInfo = {
            id: _id,
            pw: _pw
        }

        //dispatcher({type:"LOGIN_SUCCESS", payload:{id:_id, pw:_pw}});
        dispatcher(loginActions.logInSuccess(data));
    }
}

const logOut = ():any => {
    return async(dispatcher:Dispatch) => {
        //dispatcher({type:"LOGIN_SUCCESS", payload:{id:_id, pw:_pw}});
        dispatcher(loginActions.logOutSuccess());
    }
}


export const loginAction = {logIn, logOut};