import { Dispatch } from "redux";
import { productState} from "../../module/redux_module";

const getProducts = (searchQuery:string):any => {
    return async (dispatcher:Dispatch) => {
        try{
            let url:string = `http://localhost:4000/products?q=${searchQuery}`;
        // let url:string = `http://localhost:5000/products?q=${searchQuery}`;
        console.log("쿼리 값은?", url)
        let response:Response = await fetch(url);
        let data:productState[] = await response.json();
        
        console.log("getproduct :", data);
        dispatcher({type:"GET_PRODUCT_SUCCESS", payload:data});
        }catch(e){console.log(e)}
    }
}

const getProductDetail = (id:string | undefined):any => {
    return async(dispatcher:Dispatch) => {
        const url:string = `http://localhost:4000/products/${id}`;
        // const url:string = `http://localhost:5000/products/${id}`
        const response:Response = await fetch(url);
        const data:productState = await response.json();

        console.log("getproductDetail :",data);
        dispatcher({type:"GET_PRODUCTDETAIL_SUCCESS", payload:data})
    }
}

export const productAction = {getProducts, getProductDetail};