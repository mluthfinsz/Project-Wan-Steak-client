import React, { useState, useEffect } from "react";
import Sidebar from "./SidebarAdmin";
import axios from "axios";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");
  const [startDate, setStartDate] = useState(""); // Tanggal awal
  const [endDate, setEndDate] = useState(""); // Tanggal akhir
  const [filteredData, setFilteredData] = useState([]); // State untuk data yang sudah difilter
  const [orders, setOrders] = useState([]); // Data asli dari API

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
    minHeight: "80vh",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
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

  const bodyStyle = {
    padding: "24px",
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 0.3)",
    fontFamily: "Lora, serif",
  };

  const toggleButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
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
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  };

  const filterContainerStyle = {
    marginBottom: "16px",
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  };

  const dropdownStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  };

  const inputDateStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "14px",
  };

  const searchButtonStyle = {
    backgroundColor: "#0000FF",
    width: "16%",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Lora, serif",
    alignSelf: "flex-start", // Ensures button aligns properly
  };

  // Fungsi untuk mengambil data dari API
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-orders");
      setOrders(response.data);
      setFilteredData(response.data); // Inisialisasi data terfilter
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Fungsi untuk memfilter data berdasarkan status dan rentang tanggal
  // const filterData = () => {
  //   const filtered = orders.filter((data) => {
  //     const dataDate = new Date(data.created_at);
  //     const startDateMatch =
  //       startDate === "" || new Date(startDate) <= dataDate;
  //     const endDateMatch = endDate === "" || dataDate <= new Date(endDate);
  //     const statusMatch =
  //       filterStatus === "All" || data.status === filterStatus;

  //     return startDateMatch && endDateMatch && statusMatch;
  //   });
  //   setFilteredData(filtered);
  // };

  const filterData = () => {
    // Log untuk memeriksa nilai filter yang digunakan
    console.log("Filter Status:", filterStatus);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    const filtered = orders.filter((data) => {
      const dataDate = new Date(data.created_at);
      const startDateMatch =
        startDate === "" || new Date(startDate) <= dataDate;
      const endDateMatch = endDate === "" || dataDate <= new Date(endDate);

      // Memastikan bahwa status dibandingkan dengan benar
      const statusMatch =
        filterStatus === "All" ||
        data.status.toLowerCase() === filterStatus.toLowerCase();

      console.log("Matching Data:", data.status, statusMatch);

      return startDateMatch && endDateMatch && statusMatch;
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchOrders();
  }, []); // Empty dependency array to run once when the component is mounted

  return (
    <div style={dashboardWrapperStyle}>
      <div style={dashboardContainerStyle}>
        {isSidebarOpen && <Sidebar />}
        {isSidebarOpen && <div style={dividerStyle}></div>}
        <div style={mainContentStyle}>
          <div style={headerStyle}>
            <h5>Dashboard</h5> {/* Pindahkan ke kiri */}
          </div>

          <div style={bodyStyle}>
            {/* Adding h1 for "Cari Data" */}
            <h5
              style={{
                textAlign: "left",
                fontFamily: "Playfair Display, serif",
                fontWeight: "bold",
              }}
            >
              Cari Data
            </h5>
            <hr style={{ margin: "10px 0", border: "1px solid #000000" }} />

            <div style={filterContainerStyle}>
              <label>
                Status:{" "}
                <select
                  style={dropdownStyle}
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="All">Semua</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </label>
              <label>
                Dari Tanggal:{" "}
                <input
                  type="date"
                  style={inputDateStyle}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label>
                Sampai Tanggal:{" "}
                <input
                  type="date"
                  style={inputDateStyle}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </label>
              <button style={searchButtonStyle} onClick={filterData}>
                Cari
              </button>
            </div>
            <div>
              <h5
                style={{
                  textAlign: "left",
                  fontFamily: "Playfair Display, serif",
                  fontWeight: "bold",
                }}
              >
                Data
              </h5>
              <hr style={{ margin: "10px 0", border: "1px solid #000000" }} />
            </div>

            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>No</th>
                    <th style={thStyle}>Nama Pelanggan</th>
                    <th style={thStyle}>Tanggal</th>
                    <th style={thStyle}>Total Harga</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((data, index) => (
                    <tr key={index}>
                      <td style={tdStyle}>{index + 1}</td>
                      <td style={tdStyle}>{data.nama_pelanggan}</td>
                      <td style={tdStyle}>
                        {new Date(data.created_at).toLocaleDateString()}
                      </td>
                      <td style={tdStyle}>
                        Rp {data.total_harga.toLocaleString()}
                      </td>
                      <td style={tdStyle}>{data.status}</td>
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
