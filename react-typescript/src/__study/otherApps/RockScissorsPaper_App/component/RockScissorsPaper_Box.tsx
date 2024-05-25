import React from 'react'
import '../css/App.css'
import {render, myImg} from'../model/modeule'

interface OwnProps {
    title:string,
    imgOBJ?:myImg,
    result:boolean
};

//const Box = ({title = "", img = "2"}:OwnProps) => {
const RockScissorsPaper_Box:React.FC<OwnProps> = ({title, imgOBJ = {name:"a",img:"a"}, result=false}) => {
  return (
    <div className={result ? "Winbox" : "Losebox"}>
        <h1> {title} </h1>
        <img className="item-img" src = {imgOBJ.img}/>
        <h2>{result ? "Win" : "Lose"}</h2>
    </div>
  )
}

export default RockScissorsPaper_Box;