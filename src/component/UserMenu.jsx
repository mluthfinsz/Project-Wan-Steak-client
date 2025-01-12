// frontend/src/components/UserMenu.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserMenu() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState({ id: null, qty: 0 });

  useEffect(() => {
    async function fetchMenu() {
      const response = await axios.get("http://localhost:5000/menu");
      setMenu(response.data);
    }
    fetchMenu();
  }, []);

  const handleOrder = async (id) => {
    try {
      const response = await axios.put("http://localhost:5000/order", {
        id,
        orderQty: order.qty,
      });
      console.log("Order placed:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <h1>User Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <img
              src={`http://localhost:5000${item.image}`}
              alt={item.name}
              width="50"
            />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Stock: {item.qty}</p>
            <input
              type="number"
              placeholder="Quantity"
              onChange={(e) => setOrder({ id: item.id, qty: e.target.value })}
            />
            <button onClick={() => handleOrder(item.id)}>Order Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserMenu;
