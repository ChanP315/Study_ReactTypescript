export const ADD_CONTACT = "ADD_CONTACT" as const;
export const SEARCH_CONTACT = "SEARCH_CONTACT" as const;


export interface contactStatus {
    name:string,
    phoneNumber:number
}

export type contactStatusArray = {
    contactList: contactStatus[];
}

export interface Contact extends contactStatusArray {
    searchKeyword:string,
}