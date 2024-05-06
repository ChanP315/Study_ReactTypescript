import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage_App:React.FC = () => {

  const {id} = useParams();
  console.log("ppp", id)

  
  return (
    <React.Fragment>
      <h1>{id}</h1>
      <h2>
        Detail VIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
      </h2>
    </React.Fragment>
  )
}

export default ProductDetailPage_App