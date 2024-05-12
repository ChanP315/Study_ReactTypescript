import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import GrandSonBox from './GrandSonBox';
import { useDispatch } from 'react-redux';

const Box = () => {
    const dispatcher = useDispatch();
    const print = useSelector((state:RootState)=>state.statInfoReducer.statInfo);
    const count = useSelector((state:RootState)=>state.countReducer.count);


  const login = ():void => {
    dispatcher({type:"LOGIN", payload:{id:"Kim", pw:"ehdrbs"}});
  }

  return (
    <div>
        {print} this is Box Count : {count}
        <button onClick={login}>rla Login</button>
        <GrandSonBox></GrandSonBox>
    </div>
  )
}

export default Box