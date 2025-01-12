// frontend/src/components/admin/AdminMenuTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddMenuForm from "./AddMenuForm";
import EditMenuForm from "./EditMenuForm";

const AdminMenuTable = () => {
  const [menu, setMenu] = useState([]);
  const [editMenuId, setEditMenuId] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await axios.get("http://localhost:5000/api/menu");
    setMenu(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/menu/${id}`);
    fetchMenu();
  };

  const handleEdit = (id) => {
    setEditMenuId(id);
  };

  const closeEditForm = () => {
    setEditMenuId(null);
  };

  return (
    <div>
      <h2>Menu Admin</h2>

      <AddMenuForm fetchMenu={fetchMenu} />

      {editMenuId && (
        <EditMenuForm
          menuId={editMenuId}
          fetchMenu={fetchMenu}
          closeEditForm={closeEditForm}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.description}</td>
              <td>
                <img
                  src={`/uploads/${item.image}`}
                  alt={item.name}
                  width="50"
                />
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenuTable;
