export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS" as const;
export const GET_PRODUCTDETAIL_SUCCESS = "GET_PRODUCTDETAIL_SUCCESS" as const;

export interface productState {
    id:string,
    img:string,
    title:string,
    price:number,
    choice:boolean,
    new:boolean,
    size:string[]
}

export type productStateArray = {
    productList: productState[]
}





export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;

export interface loginState {
    id: string;
    pw: string;
    auth: boolean;
}