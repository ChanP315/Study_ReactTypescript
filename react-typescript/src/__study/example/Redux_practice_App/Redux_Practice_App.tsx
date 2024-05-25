import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux';
import Box from './component/Box'

const Redux_Practice_App:React.FC = () => {
  const count = useSelector((state:RootState)=>state.countReducer.count);
  const print = useSelector((state:RootState)=>state.statInfoReducer.statInfo)
  const dispatch = useDispatch();

  const increaseClick = ():void => {
    dispatch({type : "INCREASE"});
  }

  const login = ():void => {
    dispatch({type:"LOGIN", payload:{id:"chan", pw:"qkrcksdud"}});
  }

  return (
    <div>
      redux_Practioce_App!!! 
      <h1> Print Stat : {print}</h1>
      <h1> Count : {count}</h1>
      <button onClick={increaseClick}>Count Add</button>
      <button onClick={()=>dispatch({type: "INCREASE_BY", payload:5})}>Count 5++ Add</button>
      <button onClick={login}>login</button>
      <h1>id: {useSelector((state:RootState)=>state.payloadReducer.id)}, pw: {useSelector((state:RootState)=>state.payloadReducer.pw)}</h1>
      <Box></Box>
    </div>
  )
}

export default Redux_Practice_App