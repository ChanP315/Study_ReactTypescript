import React from 'react'
import '../css/Practice.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

import {useNavigate} from 'react-router-dom'

const menuList:string[] = ["여성", "남성", "신생아/유아","아동", "Musinsa Home","Sale", "지속가능성"];

interface OwnProps {
  auth:boolean
}


const Navber_App:React.FC<OwnProps> = ({auth}) => {

  const navigate = useNavigate();
  const goToLogin = ():void => {
    navigate("/login");
  }

  const goToHome = ():void => {
    navigate("/");
  }
  
  const search = (event:React.KeyboardEvent<HTMLInputElement>):void => {
    if(event.key === "Enter"){
      //const value = event.target.value; //트러블 2
      //const target:HTMLElement = event.currentTarget as HTMLElement; //트러블 2-1
      const target: EventTarget & HTMLInputElement = event.currentTarget; //트러블 2-2
      const value = target.value;

      navigate(`/q=${value}`);
    }
  }

  return (
    <React.Fragment>
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faCoffee} />
            <div>{auth? "로그아웃" : "로그인"}</div>
        </div>
        <div className="nav-section" onClick={goToHome}>
            <img width={100}
              src="data:image/png;base64,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" />
        </div>

        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu)=>(
              <li>{menu}</li>
            ))}
          </ul>
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyDown={(event) => search(event)}/>
          </div>
        </div>

        
    </React.Fragment>
    
  )
}

export default Navber_App