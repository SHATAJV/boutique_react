import React from "react";
import ProductList from "./components/productList";
import Order from "./components/order";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Boutique d'Instruments </h1>
      <ProductList />
      <Order />
    </div>
  );
};

export default App;

