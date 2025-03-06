import React, { useState } from "react";
import products from "../data/pruduct.json";
import Cart from "./panier";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Vider le panier
  const clearCart = () => setCart([]);

  // Filtrer les produits selon la recherche et la catégorie sélectionnée
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category)
  );

  return (
    <div>
      <h2>Nos Instruments </h2>
      
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtrer par catégorie */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">Toutes les catégories</option>
        <option value="Guitares">Guitares</option>
        <option value="Claviers">Claviers</option>
      </select>

      {/* Liste des produits */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </li>
        ))}
      </ul>

      {/* Affichage du panier */}
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
};

export default ProductList;



