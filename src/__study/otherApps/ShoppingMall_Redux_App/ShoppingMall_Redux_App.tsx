import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Login_Page from './page/Login_Page';
import PracticeAll_Page from './page/ProductAll_Page'
import Navbar from './component/Navber'
import PrivateRoute from './route/PrivateRoute'

import 'bootstrap/dist/css/bootstrap.min.css';


export const ShoppingMall_Redux_App:React.FC = () => {
  const [authecticate, setAuthecticate] = useState<boolean>(true); //false

  useEffect(()=>{
    console.log("authecticate : ", authecticate);
  },[authecticate])

  return (
    <React.Fragment>
        <div>Practice_App</div>
        <Navbar auth={authecticate} setAuthecticate={setAuthecticate}/>
        <Routes>
            <Route path="/" element={<PracticeAll_Page/>}/>
            <Route path="/login" element={<Login_Page setAuthecticate={setAuthecticate}/>}/>
            <Route path="/product/:id" element={<PrivateRoute auth={authecticate} />}/>
        </Routes>
        
    </React.Fragment>
  )
}
