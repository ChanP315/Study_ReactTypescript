import React from 'react'
import ProductDetail_Page from '../page/ProductDetail_Page';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


/*
interface Ownprops {
  auth:boolean;
}
*/
// const PrivateRoute:React.FC<Ownprops> = ({auth}) => {
const PrivateRoute:React.FC = () => {
  const auth = useSelector((state:RootState)=>state.login.auth)
  console.log(auth);

  return auth? <ProductDetail_Page /> : <Navigate to= "/login"/>;
}

export default PrivateRoute