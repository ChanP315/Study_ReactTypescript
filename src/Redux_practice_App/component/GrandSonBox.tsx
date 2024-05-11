import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';

const GrandSonBox = () => {
    const dispatcher = useDispatch();
    const count = useSelector((a:RootState) => a.countReducer.count);
  const print = useSelector((state:RootState)=>state.statInfoReducer.statInfo)
  return (
    <div>
        {print} . GrandSonBox {count}
        <button onClick={()=>dispatcher({type:"Addition"})}>add</button>
        <button onClick={()=>dispatcher({type:"Multiplication"})}>mul</button>
        <button onClick={()=>dispatcher({type:"Subtraction"})}>sub</button>
        <button onClick={()=>dispatcher({type:"Division"})}>div</button>
    </div>
    
  )
}

export default GrandSonBox