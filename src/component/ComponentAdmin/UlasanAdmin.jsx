import React, { useState, useEffect } from "react";
import Sidebar from "./SidebarAdmin";
import axios from "axios";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [ulasan, setUlasan] = useState([]);

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

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    overflowY: "auto",
    maxHeight: "400px", // Membatasi tinggi area scrollable
    padding: "16px", // Menambahkan padding agar konten tidak menempel
    border: "1px solid #ddd", // Border dengan warna abu-abu terang
    borderRadius: "20px", // Membulatkan sudut kontainer
    backgroundColor: "transparant", // Memberikan warna latar belakang
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "20px", // Border radius diperbesar
    border: "1px solid #ddd", // Border dengan warna abu-abu terang
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const cardHeaderStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
  };

  const cardDateStyle = {
    fontSize: "12px",
    color: "#777",
    marginTop: "4px",
  };

  const cardBodyStyle = {
    fontSize: "14px",
    color: "#555",
  };

  const cardRatingStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#f39c12", // Gold color for rating
    display: "flex",
    justifyContent: "flex-end", // Align rating to the right
  };

  // Fetch ulasan (reviews)
  const fetchUlasan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ulasan");
      setUlasan(response.data);
    } catch (error) {
      console.error("Error fetching ulasan:", error);
    }
  };

  useEffect(() => {
    fetchUlasan();
  }, []); // Fetch ulasan ketika komponen pertama kali dimuat

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push("★"); // Tanda bintang
    }
    return stars.join(""); // Gabungkan bintang untuk rating
  };

  return (
    <div style={dashboardWrapperStyle}>
      <div style={dashboardContainerStyle}>
        {isSidebarOpen && <Sidebar />}
        {isSidebarOpen && <div style={dividerStyle}></div>}
        <div style={mainContentStyle}>
          <div style={headerStyle}>
            <h5>Laporan Penjualan</h5>
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
              Ulasan
            </h5>
            <hr style={{ margin: "10px 0", border: "1px solid #000000" }} />
            <div style={cardContainerStyle}>
              {ulasan.map((review, index) => (
                <div key={index} style={cardStyle}>
                  <div style={cardHeaderStyle}>
                    <div>{review.nama}</div>
                    <div style={cardRatingStyle}>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div style={cardDateStyle}>
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>
                  <div style={cardBodyStyle}>{review.deskripsi}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
