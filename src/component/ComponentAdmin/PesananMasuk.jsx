import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./SidebarAdmin";

const PesananMasuk = () => {
  const [orders, setOrders] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const buttonStyle = {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  // Fetch orders from backend
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-orders");
      console.log(response.data); // Debug untuk melihat data dari backend
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Handle status change
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/update-order-status/${orderId}`,
        { status: newStatus }
      );

      // Update the local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={dashboardWrapperStyle}>
      <div style={dashboardContainerStyle}>
        {isSidebarOpen && <Sidebar />}
        {isSidebarOpen && <div style={dividerStyle}></div>}
        <div style={mainContentStyle}>
          <div style={headerStyle}>
            <h5>Pesanan</h5>
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
              Pesanan
            </h5>
            <hr style={{ margin: "10px 0", border: "1px solid #000000" }} />
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>No</th>
                    <th style={thStyle}>Nama</th>
                    <th style={thStyle}>No Meja</th>
                    <th style={thStyle}>Pesanan</th>
                    <th style={thStyle}>Total Harga</th>
                    <th style={thStyle}>Tanggal</th>
                    <th style={thStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order.id}>
                      <td style={tdStyle}>{index + 1}</td>
                      <td style={tdStyle}>{order.nama_pelanggan}</td>
                      <td style={tdStyle}>{order.nomor_meja}</td>
                      <td style={tdStyle}>
                        {order.items.map((item, idx) => (
                          <div key={idx}>
                            <strong>{item.nama_menu}</strong> x {item.jumlah} -
                            Rp {item.harga.toLocaleString()}
                          </div>
                        ))}
                      </td>

                      <td style={tdStyle}>
                        Rp {order.total_harga.toLocaleString()}
                      </td>
                      <td style={tdStyle}>
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td style={tdStyle}>
                        {order.status !== "Completed" ? (
                          <button
                            style={buttonStyle}
                            onClick={() =>
                              handleStatusChange(order.id, "Completed")
                            }
                          >
                            Bayar
                          </button>
                        ) : (
                          <span>Terbayar</span>
                        )}
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

export default PesananMasuk;
