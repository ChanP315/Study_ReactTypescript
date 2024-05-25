import { Dispatch } from "redux";

const login = (_id:string, _pw:string):any => {
    return async(dispatcher:Dispatch) => {
        dispatcher({type:"LOGIN_SUCCESS", payload:{id:_id, pw:_pw}});
    }
}


export const loginAction = {login};