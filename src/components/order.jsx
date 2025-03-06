import React, { useState, useEffect } from "react";

const Order = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
      }, []);
    
      return (
        <div>
          <h2> Historique des commandes</h2>
          {orders.length === 0 ? (
            <p>Aucune commande passée.</p>
          ) : (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <h3>Commande #{order.id}</h3>
                  <p>Total : {order.total} €</p>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} - {item.quantity}x - {item.price * item.quantity} €
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };
export default Order;
