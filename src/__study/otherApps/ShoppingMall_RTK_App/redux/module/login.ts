import {loginState, userInfo} from "../../module/redux_module";

// const initLogin:loginState = {
//     id: '',
//     pw: '',
//     auth:false
// };

// const loginFunc = (id:string, pw:string) => ({
//     type: LOGIN_SUCCESS,
//     payload: {id, pw}
// });

// type loginAction = | ReturnType<typeof loginFunc>;

// const loginReducer = (state:loginState = initLogin, action:loginAction) => {
//     switch(action.type) {
//         case "LOGIN_SUCCESS":
//             return {...state, id:action.payload.id, pw:action.payload.pw, auth:true};
//         default:
//             return {...state};
//     }
// };

// export default loginReducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initLogin:loginState = {
    id:'',
    pw: '',
    auth:false
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initLogin,
    reducers: {
        userUpdate: (state, action:PayloadAction<userInfo>) => {
            state.id = action.payload.id;
            state.pw = action.payload.pw;
        },
        logInSuccess: (state, action:PayloadAction<userInfo>) => {
            state.id = action.payload.id;
            state.pw = action.payload.pw;
            state.auth = true;
        },
        logOutSuccess: (state) => {
            state.auth = false;
        }
    }
})

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;