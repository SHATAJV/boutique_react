import React from "react";
import products from "../data/pruduct.json";

const ProductList = () => {
  return (
    <div>
      <h2>Nos Instruments </h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <button>Ajouter au panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
