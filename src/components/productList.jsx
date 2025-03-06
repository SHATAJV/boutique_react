import React, { useState } from "react";
import products from "../data/pruduct.json";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

      {/* Affichage des produits filtrés */}
      <ul>
        {filteredProducts.map((product) => (
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
