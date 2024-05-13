import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import store from './__study/otherApps/ShoppingMall_RTK_App/redux/store';
import { ShoppingMall_RTK_App } from './__study/otherApps/ShoppingMall_RTK_App/ShoppingMall_RTK_App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <ShoppingMall_RTK_App />
      </BrowserRouter>
    </Provider>
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
