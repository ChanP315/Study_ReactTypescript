import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';

// import store from './__study/otherApps/ShoppingMall_RTK_App/redux/store';
// import { ShoppingMall_RTK_App } from './__study/otherApps/ShoppingMall_RTK_App/ShoppingMall_RTK_App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { React_Query_Demo_App } from './__study/example/React_Query_Demo_App/React_Query_Demo_App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  // <React.StrictMode>
    // <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        {/* // <App /> */}
        {/* // <ShoppingMall_RTK_App /> */}
          <React_Query_Demo_App/>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right'/>
      </QueryClientProvider>
    // </Provider>
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
