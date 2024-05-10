import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/reducer_Modules';

const Redux_Practice_App:React.FC = () => {
  const count = useSelector((state:RootState)=>state.reducer.count);
  const dispatch = useDispatch();

  const increaseClick = ():void => {
    dispatch({type : "INCREASE"});
  }

  return (
    <div>
      redux_Practioce_App!!! 
      <h1> Count : {count}</h1>
      <button onClick={increaseClick}>Count Add</button>
    </div>
  )
}

export default Redux_Practice_App