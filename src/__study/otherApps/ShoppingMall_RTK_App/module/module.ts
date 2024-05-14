export type JSON_OBJ = {
    id:string,
    img:string,
    title:string,
    price:number,
    choice:boolean,
    new:boolean,
    size:string[]
}

export interface customError extends Error {
    response?: {
        data: any;
        status: number;
        headers: string;
    }
}