import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { thunk } from "redux-thunk";
import {thunk} from "redux-thunk";
import rootReducer from './index';
import productReducer from './module/product';

const store = createStore(productReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer)

export default store;