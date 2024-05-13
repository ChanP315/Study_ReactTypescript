import React from 'react'
import { JSON_OBJ } from '../module/module'
import '../css/ShoppingMall.css'
import { useNavigate } from 'react-router-dom'

interface OwnProps {
    item?:JSON_OBJ
}

const ProductCard:React.FC<OwnProps> = ({item}) => {

  const navigate = useNavigate();

  const showDetail = ():void => {
    navigate(`/product/${item?.id}`);
  }

  return (
    <div className="card" onClick={showDetail}>
        {/* <img src ="https://image.msscdn.net/images/goods_img/20231031/3670796/3670796_17146088722183_320.jpg"/> */}
        <img src ={item?.img}/>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new? "신제품":""}</div>
    </div>
    
  )
}

export default ProductCard