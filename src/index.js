import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {Provider} from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import useReducer from './user';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore({
  reducer:{
    user:useReducer
  }
})

root.render(
  <StrictMode>
  <Provider store={store}>  
    <App />
  </Provider>  
  </StrictMode>
);
