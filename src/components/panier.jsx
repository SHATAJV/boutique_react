import React from "react";

const Cart = ({ cart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Panier</h2>
      {cart.length === 0 ? <p>Votre panier est vide.</p> : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}x - {item.price * item.quantity} €
              </li>
            ))}
          </ul>
          <h3>Total : {total} €</h3>
          <button onClick={clearCart}>Vider le panier</button>
        </>
      )}
    </div>
  );
};

export default Cart;
