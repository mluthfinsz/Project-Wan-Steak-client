import React from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/image/Bg3.jpg"; // Pastikan path sesuai

const Welcome = () => {
  const navigate = useNavigate();

  // Style untuk container utama
  const containerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Lapisan gelap semi-transparan
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2, // Pastikan konten di atas overlay
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: "20px", // Menambahkan jarak antar tombol
  };

  const buttonStyle = {
    width: "200px", // Lebar tombol konsisten
    height: "50px", // Tinggi tombol konsisten
    padding: "10px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#344A1F",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "normal",
    transition: "0.3s", // Transisi yang lebih halus untuk efek hover
    boxShadow: "0px 9px 10px rgba(0, 0, 0, 0.5)", // Efek drop shadow
    fontFamily: "Joan, serif",
  };

  // Hover Style untuk Pembesaran Tombol
  const hoverButtonStyle = {
    ...buttonStyle,
    transform: "scale(1.1)", // Membesarkan tombol 10%
  };

  return (
    <div style={containerStyle}>
      {/* Overlay Gelap */}
      <div style={overlayStyle}></div>

      {/* Konten */}
      <div style={contentStyle}>
        <h1 style={{ fontFamily: "Abril Fatface, serif", fontSize: "3rem" }}>
          SELAMAT DATANG DI WEBSITE
        </h1>
        <h1 style={{ fontFamily: "Plaster, serif", fontSize: "3rem" }}>
          Wan Steak Corner
        </h1>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")} // Pembesaran saat hover
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")} // Kembali ke ukuran semula saat mouse keluar
            onClick={() => navigate("/beranda")}
          >
            Halaman User
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")} // Pembesaran saat hover
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")} // Kembali ke ukuran semula saat mouse keluar
            onClick={() => navigate("/page")}
          >
            Halaman Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
