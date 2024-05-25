
const add = 'Addition' as const;
const mul = 'Multiplication' as const;
const sub = 'Subtraction' as const;
const div = 'Division' as const;

const printAdd = () => ({
    type: add
})

const printMul = () => ({
    type: mul
})

const printSub = () => ({
    type: sub
})

const printDiv = () => ({
    type: div
})

type infoStatus = {
    statInfo:string;
}

const initState:infoStatus = {
    statInfo: "print"
}

type infoAction = | ReturnType<typeof printAdd> | ReturnType<typeof printMul> | ReturnType<typeof printSub> | ReturnType<typeof printDiv>

const statInfoReducer = (state:infoStatus = initState, action:infoAction) => {
    switch(action.type) {
        case add:
            return {...state, statInfo: "Add"};
        case mul:
            return {...state, statInfo: "Mul"};
        case sub:
            return {...state, statInfo: "Sub"};
        case div:
            return {...state, statInfo: "Div"};
        default:
            return {...state, statInfo: "print"};
    }
};
export default statInfoReducer;