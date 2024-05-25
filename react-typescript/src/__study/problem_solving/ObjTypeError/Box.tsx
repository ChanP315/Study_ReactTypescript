import React from 'react'
import '../App.css'
import {render, myImg} from'./modeule'

interface OwnProps {
    title:string,
    imgOBJ?:myImg
};

//const Box = ({title = "", img = "2"}:OwnProps) => {
const Box:React.FC<OwnProps> = ({title, imgOBJ = {name:"a",img:"a"}}) => {
  return (
    <div className="box">
        <h1> {title} </h1>
        <img className="item-img"
            src = {imgOBJ.img}/>
        <h2>Win</h2>
        <h2>Lose</h2>
        <h2>{title}</h2>
    </div>
  )
}

export default Box;