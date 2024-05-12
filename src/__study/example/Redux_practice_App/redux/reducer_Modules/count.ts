// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = 'INCREASE' as const;
const INCREASE_BY = 'INCREASE_BY' as const;


const increase = () => ({
    type: INCREASE
})

const increaseBy = (num:number) => ({
    type: INCREASE_BY,
    payload: num
})

type countStatus = {
    count:number;
}

const initialState:countStatus = {
    count:0
}

type countAction = | ReturnType<typeof increase> | ReturnType<typeof increaseBy>;


const countReducer = (state=initialState, action:countAction):countStatus => {
    console.log(action);
    if(action.type === 'INCREASE')
        return {...state, count: state.count + 1};
    else if(action.type ==='INCREASE_BY')
        return {...state, count: state.count + action.payload};

    return {...state};
}

export default countReducer;