import React from "react";

const Cart = ({ cart, clearCart }) => {
  // Calculer le total du panier avec 2 décimales
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  // Fonction pour valider la commande
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("⚠ Votre panier est vide !");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: total,
    };

    try {
      // Récupérer les commandes précédentes en évitant les erreurs JSON
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(order);

      // Sauvegarder la nouvelle commande dans localStorage
      localStorage.setItem("orders", JSON.stringify(orders));

      // Vider le panier après validation
      clearCart();

      alert(`✅ Commande #${order.id} validée avec succès !\nTotal: ${total} €`);
    } catch (error) {
      alert("❌ Erreur lors de l'enregistrement de la commande !");
      console.error("Erreur localStorage:", error);
    }
  };

  // Fonction pour vider le panier avec confirmation
  const confirmClearCart = () => {
    if (window.confirm("Êtes-vous sûr de vouloir vider votre panier ?")) {
      clearCart();
    }
  };

  return (
    <div>
      <h2>🛒 Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}x - {(item.price * item.quantity).toFixed(2)} €
              </li>
            ))}
          </ul>
          <h3>Total : {total} €</h3>
          <button
            onClick={placeOrder}
            style={{ backgroundColor: "green", color: "white", padding: "10px", marginRight: "10px" }}
          >
            Valider la commande
          </button>
          <button
            onClick={confirmClearCart}
            style={{ backgroundColor: "red", color: "white", padding: "10px" }}
          >
            ❌ Vider le panier
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
