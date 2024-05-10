import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer_Modules/index';


let store = createStore(rootReducer);



export default store;