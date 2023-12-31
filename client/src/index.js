import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// CART PROVIDER
import CartProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
