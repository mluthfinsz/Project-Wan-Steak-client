// import React, { useState, useEffect } from "react";
// import Sidebar from "./SidebarAdmin";
// import axios from "axios";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [menus, setMenus] = useState([]);
//   const [formData, setFormData] = useState({
//     nama: "",
//     harga: "",
//     stok: "",
//     deskripsi: "",
//     gambar: null,
//   });
//   const [editMenuId, setEditMenuId] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const fetchMenus = async () => {
//     const response = await axios.get("http://localhost:5000/menu");
//     setMenus(response.data);
//   };

//   useEffect(() => {
//     fetchMenus();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, gambar: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     if (editMenuId) {
//       const response = await axios.put(
//         `http://localhost:5000/menu/${editMenuId}`,
//         data
//       );
//       setMenus((prevMenus) =>
//         prevMenus.map((menu) =>
//           menu.id === editMenuId ? { ...menu, ...response.data } : menu
//         )
//       );
//     } else {
//       const response = await axios.post("http://localhost:5000/menu", data);
//       setMenus([...menus, response.data]);
//     }

//     setEditMenuId(null);
//     setFormData({
//       nama: "",
//       harga: "",
//       stok: "",
//       deskripsi: "",
//       gambar: null,
//     });
//     setShowForm(false);
//   };

//   const handleEdit = (menu) => {
//     setEditMenuId(menu.id);
//     setFormData({
//       nama: menu.nama,
//       harga: menu.harga,
//       stok: menu.stok,
//       deskripsi: menu.deskripsi,
//       gambar: null,
//     });
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this menu item?")) {
//       await axios.delete(`http://localhost:5000/menu/${id}`);
//       setMenus(menus.filter((menu) => menu.id !== id));
//     }
//   };

//   const dashboardWrapperStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   };

//   const dashboardContainerStyle = {
//     display: "flex",
//     width: "80%",
//     maxWidth: "1200px",
//     height: "80vh",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//   };

//   const mainContentStyle = {
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column",
//     overflow: "hidden",
//   };

//   const contentWrapperStyle = {
//     flexGrow: 1,
//     overflowY: "auto",
//   };

//   const headerStyle = {
//     padding: "16px",
//     backgroundColor: "#f1f1f1",
//     borderBottom: "1px solid #ddd",
//     fontSize: "18px",
//     fontWeight: "bold",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontFamily: "Noto Serif, serif",
//   };

//   const dividerStyle = {
//     width: "10px",
//     backgroundColor: "inherit",
//     boxShadow: "none",
//   };

//   const tableContainerStyle = {
//     maxHeight: "300px",
//     overflowY: "auto",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     backgroundColor: "#fff",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//   };

//   const thStyle = {
//     padding: "12px",
//     backgroundColor: "#f1f1f1",
//     textAlign: "left",
//     borderBottom: "2px solid #ddd",
//   };

//   const tdStyle = {
//     padding: "12px",
//     borderBottom: "1px solid #ddd",
//   };

//   const h2Style = {
//     fontSize: "2rem", // Ukuran font h2
//     fontWeight: "bold", // Ketebalan font
//     color: "#344A1F", // Warna teks yang serasi dengan tema
//     textTransform: "uppercase", // Teks kapitalisasi
//     marginBottom: "10px", // Jarak antara h2 dan hr
//     fontFamily: "Arial, sans-serif", // Font yang lebih bersih
//   };

//   const hrStyle = {
//     width: "100%", // Lebar garis horizontal
//     margin: "0 auto", // Membuat garis horizontal berada di tengah
//     border: "1px solid #344A1F", // Warna dan ketebalan garis
//     borderRadius: "5px", // Sedikit sudut melengkung pada garis
//   };

//   return (
//     <div style={dashboardWrapperStyle}>
//       <div style={dashboardContainerStyle}>
//         {isSidebarOpen && <Sidebar />}
//         {isSidebarOpen && <div style={dividerStyle}></div>}
//         <div style={mainContentStyle}>
//           <div style={headerStyle}>
//             <h5>Dashboard</h5>
//           </div>
//           <div style={contentWrapperStyle}>
//             <div className="d-flex justify-content-end mb-3">
//               <button
//                 onClick={() => setShowForm(!showForm)}
//                 className="btn btn-success"
//                 style={{
//                   marginTop: "20px", // Jarak dari elemen di atas
//                 }}
//               >
//                 {showForm ? "Cancel" : "Tambah Menu"}
//               </button>
//             </div>

//             {/* Menambahkan H2 dan HR */}
//             <div className="text-center mb-4">
//               <h5
//                 style={{
//                   textAlign: "left",
//                   fontFamily: "Playfair Display, serif",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Menu
//               </h5>
//               <hr style={hrStyle} />
//             </div>

//             {showForm && (
//               <div
//                 className="card p-4 mb-4"
//                 style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}
//               >
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label className="form-label" htmlFor="nama">
//                       Nama
//                     </label>
//                     <input
//                       type="text"
//                       name="nama"
//                       id="nama"
//                       className="form-control"
//                       placeholder="Nama"
//                       onChange={handleChange}
//                       value={formData.nama}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label" htmlFor="harga">
//                       Harga
//                     </label>
//                     <input
//                       type="number"
//                       name="harga"
//                       id="harga"
//                       className="form-control"
//                       placeholder="Harga"
//                       onChange={handleChange}
//                       value={formData.harga}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label" htmlFor="stok">
//                       Stok
//                     </label>
//                     <input
//                       type="number"
//                       name="stok"
//                       id="stok"
//                       className="form-control"
//                       placeholder="Stok"
//                       onChange={handleChange}
//                       value={formData.stok}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label" htmlFor="gambar">
//                       Gambar
//                     </label>
//                     <input
//                       type="file"
//                       name="gambar"
//                       id="gambar"
//                       className="form-control"
//                       onChange={handleFileChange}
//                     />
//                   </div>

//                   <button type="submit" className="btn btn-primary">
//                     {editMenuId ? "Update Menu" : "Add Menu"}
//                   </button>
//                 </form>
//               </div>
//             )}

//             <div style={tableContainerStyle}>
//               <table style={tableStyle}>
//                 <thead>
//                   <tr>
//                     <th style={thStyle}>Nama</th>
//                     <th style={thStyle}>Harga</th>
//                     <th style={thStyle}>Stok</th>
//                     <th style={thStyle}>Gambar</th>
//                     <th style={thStyle}>Aksi</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {menus.map((menu) => (
//                     <tr key={menu.id}>
//                       <td style={tdStyle}>{menu.nama}</td>
//                       <td style={tdStyle}>{menu.harga}</td>
//                       <td style={tdStyle}>{menu.stok}</td>
//                       <td>
//                         <img
//                           src={`http://localhost:5000${menu.gambar}`}
//                           alt={menu.nama}
//                           className="img-thumbnail"
//                           width="100"
//                         />
//                       </td>
//                       <td style={tdStyle}>
//                         <button
//                           onClick={() => handleEdit(menu)}
//                           className="btn btn-warning btn-sm"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(menu.id)}
//                           className="btn btn-danger btn-sm"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import Sidebar from "./SidebarAdmin";
import axios from "axios";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [menus, setMenus] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    stok: "",
    deskripsi: "",
    gambar: null,
  });
  const [editMenuId, setEditMenuId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchMenus = async () => {
    const response = await axios.get("http://localhost:5000/menu");
    setMenus(response.data);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

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

    if (editMenuId) {
      const response = await axios.put(
        `http://localhost:5000/menu/${editMenuId}`,
        data
      );
      setMenus((prevMenus) =>
        prevMenus.map((menu) =>
          menu.id === editMenuId ? { ...menu, ...response.data } : menu
        )
      );
    } else {
      const response = await axios.post("http://localhost:5000/menu", data);
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
    setShowForm(false);
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
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      setMenus(menus.filter((menu) => menu.id !== id));
    }
  };

  const dashboardWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const dashboardContainerStyle = {
    display: "flex",
    width: "80%",
    maxWidth: "1200px",
    height: "80vh",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const contentWrapperStyle = {
    flexGrow: 1,
    overflowY: "auto",
  };

  const headerStyle = {
    padding: "16px",
    backgroundColor: "#f1f1f1",
    borderBottom: "1px solid #ddd",
    fontSize: "18px",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "center", // Memusatkan secara horizontal
    alignItems: "center", // Memusatkan secara vertikal
    fontFamily: "Lora, serif",
  };

  const dividerStyle = {
    width: "10px",
    backgroundColor: "inherit",
    boxShadow: "none",
  };

  const tableContainerStyle = {
    maxHeight: "300px",
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#fff",
    marginRight: "20px", // Memberikan space di sisi kanan tabel
    marginLeft: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    padding: "12px",
    backgroundColor: "#f1f1f1",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    fontFamily: "Lora, serif",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    fontFamily: "Lora, serif",
  };

  const hrStyle = {
    width: "100%",
    margin: "0 auto",
    border: "1px solid #344A1F",
    borderRadius: "5px",
  };

  const bodyStyle = {
    padding: "24px",
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 0.3)",
    fontFamily: "Lora, serif",
  };

  return (
    <div style={dashboardWrapperStyle}>
      <div style={dashboardContainerStyle}>
        {isSidebarOpen && <Sidebar />}
        {isSidebarOpen && <div style={dividerStyle}></div>}
        <div style={mainContentStyle}>
          <div style={headerStyle}>
            <h5>Produk</h5>
          </div>
          <div style={contentWrapperStyle}>
            {/* Button dan H5 Sejajar */}
            <div style={bodyStyle}>
              {/* Wrapper untuk h5 dan button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: "bold",
                  }}
                >
                  Pesanan
                </h5>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="btn"
                  style={{
                    backgroundColor: "#0000FF",
                    borderColor: "#0000FF",
                    color: "#FFFFFF", // Warna teks putih agar kontras dengan tombol biru
                  }}
                >
                  {showForm ? "Kembali" : "Tambah Menu"}
                </button>
              </div>
              <hr style={{ margin: "10px 0", border: "1px solid #000000" }} />
            </div>

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
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      {editMenuId ? "Selesai" : "Add Menu"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Memberikan Space pada Tabel */}
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Nama</th>
                    <th style={thStyle}>Harga</th>
                    <th style={thStyle}>Stok</th>
                    <th style={thStyle}>Gambar</th>
                    <th style={thStyle}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map((menu) => (
                    <tr key={menu.id}>
                      <td style={tdStyle}>{menu.nama}</td>
                      <td style={tdStyle}>{menu.harga}</td>
                      <td style={tdStyle}>{menu.stok}</td>
                      <td>
                        <img
                          src={`http://localhost:5000${menu.gambar}`}
                          alt={menu.nama}
                          className="img-thumbnail"
                          width="100"
                        />
                      </td>
                      <td style={tdStyle}>
                        <button
                          onClick={() => handleEdit(menu)}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(menu.id)}
                          className="btn btn-danger btn-sm"
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
