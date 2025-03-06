import React from "react";

const Cart = ({ cart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Fonction pour valider la commande
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Votre panier est vide !");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: total,
    };

    // Récupérer les commandes précédentes depuis localStorage
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);

    // Sauvegarder dans localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Vider le panier
    clearCart();
    alert("Commande validée avec succès !");
  };

  return (
    <div>
      <h2>Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}x - {item.price * item.quantity} €
              </li>
            ))}
          </ul>
          <h3>Total : {total} €</h3>
          <button onClick={placeOrder}> Valider la commande</button>
          <button onClick={clearCart}> Vider le panier</button>
        </>
      )}
    </div>
  );
};

export default Cart;
