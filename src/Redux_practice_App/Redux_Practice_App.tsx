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

  return (
    <div>
      redux_Practioce_App!!! 
      <h1> Print Stat : {print}</h1>
      <h1> Count : {count}</h1>
      <button onClick={increaseClick}>Count Add</button>
      <Box></Box>
    </div>
  )
}

export default Redux_Practice_App