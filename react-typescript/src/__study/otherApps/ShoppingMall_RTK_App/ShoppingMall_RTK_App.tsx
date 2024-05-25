import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Login_Page from './page/Login_Page';
import PracticeAll_Page from './page/ProductAll_Page'
import Navbar from './component/Navber'
import PrivateRoute from './route/PrivateRoute'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


export const ShoppingMall_RTK_App:React.FC = () => {
  // const [authecticate, setAuthecticate] = useState<boolean>(false);
  const authecticate = useSelector((state:RootState)=>state.login.auth);

  useEffect(()=>{
    console.log("authecticate : ", authecticate);
  },[authecticate])

  return (
    <React.Fragment>
        <div>Practice_App</div>
        {/* <Navbar auth={authecticate} setAuthecticate={setAuthecticate}/> */}
        <Navbar/>
        <Routes>
            <Route path="/" element={<PracticeAll_Page/>}/>
            {/* <Route path="/login" element={<Login_Page setAuthecticate={setAuthecticate}/>}/> */}
            <Route path="/login" element={<Login_Page/>}/>
            {/* <Route path="/product/:id" element={<PrivateRoute auth={authecticate} />}/> */}
            <Route path="/product/:id" element={<PrivateRoute/>}/>
        </Routes>
        
    </React.Fragment>
  )
}
