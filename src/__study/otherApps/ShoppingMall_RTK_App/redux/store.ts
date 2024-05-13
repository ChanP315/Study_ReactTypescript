import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk";

/*
const store = createStore(productReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer)
*/

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './module/login';
import productReducer from './module/product';

const store = configureStore({
    reducer: {
        //login: loginReducer,
        product: productReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
export default store;