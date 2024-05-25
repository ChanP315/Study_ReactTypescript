import { GET_PRODUCT_SUCCESS, productState, productStateArray, GET_PRODUCTDETAIL_SUCCESS } from "../../module/redux_module";

const initProduct: productStateArray = {
    productList: []
}

export const productFunc = (product: productState[]) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: product
})

export const productDetailFunc = (id:productState) => ({
    type: GET_PRODUCTDETAIL_SUCCESS,
    payload: id
})

type productAction = | ReturnType<typeof productFunc> | ReturnType<typeof productDetailFunc>;

const productReducer = (state:productStateArray = initProduct, action:productAction):productStateArray => {
    switch(action.type){
        case "GET_PRODUCT_SUCCESS":
            console.log("productRedux :", action.payload);
            return {...state, productList: action.payload};
        case "GET_PRODUCTDETAIL_SUCCESS":
            console.log("productDetailRedux :", action.payload);
            return {...state, productList: [action.payload]};
        default:
            return {...state};
    }
}

export default productReducer;