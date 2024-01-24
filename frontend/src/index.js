import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ShopContextProvider from './Context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider> 
        <App/>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>

);

// const root = document.getElementById("root");
// render(
//   <ShopContextProvider>
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
//   </ShopContextProvider>, root);