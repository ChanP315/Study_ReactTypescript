import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AboutPage_App:React.FC = () => {

  const navigate = useNavigate();

  const goToAboutPage = ():void => {
    navigate('/');
  }

  return (
    <React.Fragment>
      <h1>
        About Page
      </h1>
      <Link to="/">asd</Link>
      <button onClick={goToAboutPage}>Go to About</button>
    </React.Fragment>
  )
}

export default AboutPage_App