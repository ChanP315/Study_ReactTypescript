const login = "LOGIN" as const;

// interface User {
//     id:string,
//     pw:string
// }

const Login = (user: payloadStatus) => ({
    type:login,
    payload:user
})

type payloadAction = | ReturnType<typeof Login>

interface payloadStatus {
    id:string;
    pw:string;
}

const initPayload:payloadStatus = {
    id: "null",
    pw: "null"
}

const payloadReducer = (state:payloadStatus = initPayload, action:payloadAction):payloadStatus => {
    switch(action.type)
    {
        case login:
            return {...state, id:action.payload.id, pw: action.payload.pw};
        default:
            return {...state};
    }
};

export default payloadReducer;