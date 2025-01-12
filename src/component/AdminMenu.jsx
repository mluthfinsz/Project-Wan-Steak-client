// frontend/src/components/AdminMenu.jsx
import React, { useState } from "react";
import axios from "axios";

function AdminMenu() {
  const [formData, setFormData] = useState({
    name: "",
    qty: 0,
    price: 0,
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("qty", formData.qty);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/menu",
        data
      );
      console.log("Menu added:", response.data);
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  return (
    <div>
      <h1>Admin Menu</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          onChange={(e) =>
            setFormData({ ...formData, qty: parseInt(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) =>
            setFormData({ ...formData, price: parseFloat(e.target.value) })
          }
        />
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
        <button type="submit">Add Menu</button>
      </form>
    </div>
  );
}

export default AdminMenu;
