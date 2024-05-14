import { GET_PRODUCT_SUCCESS, productState, productStateArray, GET_PRODUCTDETAIL_SUCCESS } from "../../module/redux_module";

/*
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
*/
import { PayloadAction, SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { customError } from "../../module/module";

const _initialState: productStateArray = ({
    productList: [],
    isLoading: false,
    error: ''
})

const initProduct: productStateArray = {
    productList: [],
    isLoading: false,
    error: ''
}

// export const getProduct = createAsyncThunk<productState[], string,{rejectValue:string}>('product/fetchAll',async(searchQuery, {rejectWithValue})=> {
export const fatchProduct = createAsyncThunk<productState[], string,{rejectValue:string}>('product/fetchAll',async(searchQuery, {rejectWithValue})=> {
    try{
        const url:string = `http://localhost:4000/products?q=${searchQuery}`;
        // let url:string = `http://localhost:5000/products?q=${searchQuery}`;
        console.log("쿼리 값은?", url)
        const response:Response = await fetch(url);
        //let data:productState[] = await response.json();
        //throw new Error("너무 힘들었다...")
        return await response.json() as productState[];
    }catch(error:unknown)
    {
        const customE = error as customError;
        //return customE.message;
        console.log(customE.message);
        return rejectWithValue(customE.message);
    }
});

export const fatchProductDetail = createAsyncThunk<productState, string|undefined,{rejectValue:string}>('product/fetchDetail',async(id, {rejectWithValue})=> {
    try{
        const url:string = `http://localhost:4000/products/${id}`;
        // const url:string = `http://localhost:5000/products/${id}`
        const response:Response = await fetch(url);
        // const data:productState = await response.json();
        return await response.json() as productState;
    }catch(e){
        const customE = e as customError;
        //return customE.message;
        console.log(customE.message);
        return rejectWithValue(customE.message);
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState: initProduct,
    reducers: {
        // Redux-toolkit studying ver 2 : createAsyncThunk()
        // getProductSuccess: (state, action: PayloadAction<productState[]>) => {
        //     console.log("getproduct :", action.payload);
        //     state.productList = action.payload;
        // },
        get_ProductDetailSuccess: (state, action: PayloadAction<productState>) => {
            console.log("getproduct :", action.payload);
            state.productList = [action.payload];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fatchProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fatchProduct.fulfilled, (state, action: PayloadAction<productState[]>) => {
            state.isLoading = false;
            state.productList = action.payload;
        });
        builder.addCase(fatchProduct.rejected, (state, action: PayloadAction<string | undefined>) => {
            console.log(action.payload);
            state.isLoading = false;
            state.error = action.payload || 'Unknown error occurred';
        });

        builder.addCase(fatchProductDetail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fatchProductDetail.fulfilled, (state, action: PayloadAction<productState>) => {
            state.isLoading = false;
            state.productList = [action.payload];
        });
        builder.addCase(fatchProductDetail.rejected, (state, action: PayloadAction<string | undefined>) => {
            console.log(action.payload);
            state.isLoading = false;
            state.error = action.payload || 'Unknown error occurred';
        });
    },
})

export const selectProductList = (state: RootState) => state.product.productList;

export const productActions = productSlice.actions;
export default productSlice.reducer;
