import React from 'react'
import '../css/App.css'
import {render, myImg} from'../model/modeule'

interface OwnProps {
    title:string,
    imgOBJ?:myImg,
    result?:boolean
};

export default class RockScissorsPaper_ClassBox extends React.Component<OwnProps> {

  constructor(props:OwnProps){
    super(props);
  }

  render() {
    //const {title, imgOBJ, result} = this.props;

    return (
      <div className={this.props.result ? "Winbox" : "Losebox"}>
          <h1> {this.props.title} </h1>
          <h1> {this.props.imgOBJ?.name} </h1>
          <img className="item-img" src = {this.props.imgOBJ && this.props.imgOBJ.img}/>
          <h2>{this.props.result ? "Win" : "Lose"}</h2>
      </div>
    )
  }
}