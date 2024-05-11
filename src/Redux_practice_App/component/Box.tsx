import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import GrandSonBox from './GrandSonBox';

const Box = () => {
    const print = useSelector((state:RootState)=>state.statInfoReducer.statInfo)
    const count = useSelector((state:RootState)=>state.countReducer.count)
  return (
    <div>
        {print} this is Box Count : {count}
        <GrandSonBox></GrandSonBox>
    </div>
  )
}

export default Box