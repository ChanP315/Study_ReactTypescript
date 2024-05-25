import React from 'react'
import ProductDetail_Page from '../page/ProductDetail_Page';
import { Navigate } from 'react-router-dom';

interface Ownprops {
  auth:boolean;
}

const PrivateRoute:React.FC<Ownprops> = ({auth}) => {
  console.log(auth);

  return auth? <ProductDetail_Page /> : <Navigate to= "/login"/>;
}

export default PrivateRoute