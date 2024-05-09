import React from 'react'
import ProductDetail_App from '../page/ProductDetail_App';
import { Navigate } from 'react-router-dom';

interface Ownprops {
  auth:boolean;
}

const PrivateRoute_App:React.FC<Ownprops> = ({auth}) => {
  console.log(auth);

  return auth? <ProductDetail_App /> : <Navigate to= "/login"/>;
}

export default PrivateRoute_App