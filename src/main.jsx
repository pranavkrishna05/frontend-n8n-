import React from "react";
import ReactDOM from "react-dom/";
import { BrowserRouter } from "react-router-dom";
import App from "./";
import { CartProvider } from "./context/CartContext";
import "./index.css";          
import "./styles/global.css"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
