import { keyboard } from '@testing-library/user-event/dist/keyboard';
import * as module from '../../module/redux_module';

const initContact:module.Contact = {
    contactList:[],
    searchKeyword:''
}

const addFunc = (param: module.contactStatus) => ({
    type: module.ADD_CONTACT,
    payload: param
});

const searchFucn = (keyword:string) => ({
    type: module.SEARCH_CONTACT,
    payload: keyword
})

type contactAction = | ReturnType<typeof addFunc> | ReturnType<typeof searchFucn>;

const contactReducer = (state:module.Contact = initContact, action:contactAction):module.Contact => {
    const {type} = action;
    
    switch(action.type) {
        case 'ADD_CONTACT':
            return {...state, contactList:[...state.contactList,{
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber
            }]};
        case 'SEARCH_CONTACT':
            return {...state, searchKeyword: action.payload}
        default:
            return {...state};
    }
}

export default contactReducer;