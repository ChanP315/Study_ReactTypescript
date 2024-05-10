import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Redux_Practice_App from './Redux_practice_App/Redux_Practice_App';
import { Provider } from 'react-redux';
import store from './Redux_practice_App/redux/store' 


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
        {/* <App /> */}
        <Redux_Practice_App/>
      {/* </BrowserRouter> */}
    </Provider>
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
