import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Login_App from './page/Login_App';
import ProductDetail_App from './page/ProductDetail_App';
import PracticeAll_App from './page/ProductAll_App'
import Navbar_App from './component/Navber_App'
import PrivateRoute_App from './route/PrivateRoute_App'

import 'bootstrap/dist/css/bootstrap.min.css';


export const Practice_App:React.FC = () => {
  const [authecticate, setAuthecticate] = useState<boolean>(false);

  useEffect(()=>{
    console.log("authecticate : ", authecticate);
  },[authecticate])

  return (
    <React.Fragment>
        <div>Practice_App</div>
        <Navbar_App auth={authecticate} setAuthecticate={setAuthecticate}/>
        <Routes>
            <Route path="/" element={<PracticeAll_App/>}/>
            <Route path="/login" element={<Login_App setAuthecticate={setAuthecticate}/>}/>
            <Route path="/product/:id" element={<PrivateRoute_App auth={authecticate} />}/>
        </Routes>
        
    </React.Fragment>
  )
}
