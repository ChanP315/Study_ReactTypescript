const INCREASE = 'INCREASE' as const;

export const increase = () => ({
    type: INCREASE
})

type countStatus = {
    count:number;
}

const initialState:countStatus = {
    count:0
}

type countAction = | ReturnType<typeof increase>;


const reducer = (state=initialState, action:countAction):countStatus => {
    console.log(action);
    if(action.type === INCREASE)
        return {...state, count: state.count + 1};

    return {...state};
}

export default reducer;