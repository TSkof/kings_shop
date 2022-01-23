import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  store  from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer className="toast" limit={2}/>
  </Provider>,
  document.getElementById("root")
);
