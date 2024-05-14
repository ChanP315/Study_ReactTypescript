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
    productList: productState[];
    isLoading: boolean;
    error: string | undefined
}





export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;

export interface userInfo {
    id: string,
    pw: string
}
export interface loginState extends userInfo {
    auth: boolean;
}