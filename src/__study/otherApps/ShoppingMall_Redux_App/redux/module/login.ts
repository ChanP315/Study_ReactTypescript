import { LOGIN_SUCCESS, loginState } from "../../module/redux_module";

const initLogin:loginState = {
    id: '',
    pw: '',
    auth:false
};

const loginFunc = (id:string, pw:string) => ({
    type: LOGIN_SUCCESS,
    payload: {id, pw}
});

type loginAction = | ReturnType<typeof loginFunc>;

const loginReducer = (state:loginState = initLogin, action:loginAction) => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return {...state, id:action.payload.id, pw:action.payload.pw, auth:true};
        default:
            return {...state};
    }
};

export default loginReducer;