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
      <h2>Nos Instruments</h2>
      
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder=" Rechercher un produit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      {/* Filtrer par catégorie */}
      <select onChange={(e) => setCategory(e.target.value)} style={{ marginLeft: "10px" }}>
        <option value="All">Toutes les catégories</option>
        <option value="Guitares">Guitares</option>
        <option value="Claviers">Claviers</option>
      </select>
       {/* Bouton pour voir le panier */}
       <button 
        onClick={() => window.location.href = "/panier"} 
        style={{ backgroundColor: "green", color: "white", padding: "10px", marginTop: "10px", cursor: "pointer" }}>
         Voir mon panier
      </button>

      {/* Liste des produits */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
            <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>{product.price} €</strong></p>
            <button 
              onClick={() => addToCart(product)} 
              style={{ backgroundColor: "blue", color: "white", padding: "5px", cursor: "pointer" }}>
               Ajouter au panier
            </button>
          </li>
        ))}
      </ul>

      {/* Affichage du panier */}
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
};

export default ProductList;

