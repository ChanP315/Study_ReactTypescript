import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage_App from './Page/HomePage_App'
import AboutPage_App from './Page/AboutPage_App'
import ProductPage_App from './Page/Product/ProductPage_App'
import ProductDetailPage_App from './Page/Product/ProductDetailPage_App'
import LoginPage_App from './Page/User/LoginPage_App'
import UserPage_App from './Page/User/UserPage_App'

import { useState } from 'react'

const RouterExample:React.FC = () => {

  const [authenticate, setAuthenticate] = useState<boolean>(false)
  const PrivateRoute:React.FC = () => {
    return (
      authenticate == true?
        <UserPage_App/> :
        <Navigate to ="/login"/>
    )
  }

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage_App/>}/>
        <Route path="/about" element={<AboutPage_App/>}/>
        <Route path="/products" element={<ProductPage_App/>}/>
        <Route path="/products/:id" element={<ProductDetailPage_App/>}/>
        <Route path="/login" element={<LoginPage_App/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </React.Fragment>
    
  )
}

export default RouterExample