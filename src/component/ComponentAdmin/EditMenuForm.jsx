// frontend/src/components/admin/EditMenuForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditMenuForm = ({ menuId, fetchMenu, closeEditForm }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchMenuDetails = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/menu/${menuId}`
      );
      const { name, price, stock, description } = response.data;
      setName(name);
      setPrice(price);
      setStock(stock);
      setDescription(description);
    };
    fetchMenuDetails();
  }, [menuId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    if (image) formData.append("image", image);

    await axios.put(`http://localhost:5000/api/menu/${menuId}`, formData);
    fetchMenu(); // Refresh list
    closeEditForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Menu</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Update Menu</button>
    </form>
  );
};

export default EditMenuForm;
