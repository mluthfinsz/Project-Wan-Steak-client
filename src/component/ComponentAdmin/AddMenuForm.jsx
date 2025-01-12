import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [menus, setMenus] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    stok: "",
    deskripsi: "",
    gambar: null,
  });
  const [editMenuId, setEditMenuId] = useState(null);
  const [showForm, setShowForm] = useState(false); // State for controlling form visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const response = await axios.get("http://localhost:5000/menu");
    setMenus(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, gambar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    let response;
    if (editMenuId) {
      response = await axios.put(
        `http://localhost:5000/menu/${editMenuId}`,
        data
      );
      setMenus((prevMenus) =>
        prevMenus.map((menu) =>
          menu.id === editMenuId ? { ...menu, ...response.data } : menu
        )
      );
    } else {
      response = await axios.post("http://localhost:5000/menu", data);
      setMenus([...menus, response.data]);
    }

    setEditMenuId(null);
    setFormData({
      nama: "",
      harga: "",
      stok: "",
      deskripsi: "",
      gambar: null,
    });
    setShowForm(false); // Hide the form after submission
  };

  const handleEdit = (menu) => {
    setEditMenuId(menu.id);
    setFormData({
      nama: menu.nama,
      harga: menu.harga,
      stok: menu.stok,
      deskripsi: menu.deskripsi,
      gambar: null,
    });
    setShowForm(true); // Show the form for editing
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      setMenus(menus.filter((menu) => menu.id !== id));
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        left: "260px",
        width: "calc(165vh - 100px)",
        height: "calc(100vh - 100px)",
        padding: "20px",
        overflowY: "auto",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1 className="text-center mb-3 fs-2 fs-md-3">Manajemen Menu</h1>

      {/* Button to toggle form visibility */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="btn btn-success mb-3"
      >
        {showForm ? "Cancel" : "Add Menu"}
      </button>

      {/* Conditionally render form */}
      {showForm && (
        <div
          className="card p-4 mb-4"
          style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="nama">
                Nama
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="form-control"
                placeholder="Nama"
                onChange={handleChange}
                value={formData.nama}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="harga">
                Harga
              </label>
              <input
                type="number"
                name="harga"
                id="harga"
                className="form-control"
                placeholder="Harga"
                onChange={handleChange}
                value={formData.harga}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="stok">
                Stok
              </label>
              <input
                type="number"
                name="stok"
                id="stok"
                className="form-control"
                placeholder="Stok"
                onChange={handleChange}
                value={formData.stok}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="deskripsi">
                Deskripsi
              </label>
              <textarea
                name="deskripsi"
                id="deskripsi"
                className="form-control"
                placeholder="Deskripsi"
                onChange={handleChange}
                value={formData.deskripsi}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="kategori">
                Kategori
              </label>
              <select
                name="kategori"
                id="kategori"
                className="form-control"
                onChange={handleChange}
                value={formData.kategori}
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="gambar">
                Gambar
              </label>
              <input
                type="file"
                name="gambar"
                id="gambar"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {editMenuId ? "Update Menu" : "Add Menu"}
            </button>
          </form>
        </div>
      )}

      <div className="card p-4">
        <h4>Menu List</h4>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Deskripsi</th>
              <th>Gambar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu.id}>
                <td>{menu.nama}</td>
                <td>{menu.harga}</td>
                <td>{menu.stok}</td>
                <td>{menu.deskripsi}</td>
                <td>
                  <img
                    src={`http://localhost:5000${menu.gambar}`}
                    alt={menu.nama}
                    className="img-thumbnail"
                    width="100"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(menu)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(menu.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
