import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage_App:React.FC = () => {
  const navigate = useNavigate();

  const goToProductPage = ():void => {
    navigate("/Products?q=pants");
  }
  
  return (
    <React.Fragment>
      <h1>
        Home Page
      </h1>
      <Link to="/about">asd</Link>
      <button onClick={goToProductPage}>Go to product page</button>
    </React.Fragment>
  )
}

export default HomePage_App