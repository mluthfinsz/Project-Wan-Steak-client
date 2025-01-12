import React from "react";

const SemuaMenuHeader = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px 0", // Jarak atas dan bawah
    backgroundColor: "#344A1F", // Warna latar belakang rectangle
    marginTop: "50px",
    marginBottom: "50px",
  };

  const hrStyle = {
    flex: 1, // Membuat HR fleksibel
    height: "10px",
    backgroundColor: "white", // Warna garis
    margin: "0 70px", // Jarak horizontal antara garis dan teks
    border: "none", // Menghilangkan border bawaan HR
    opacity: 0.8, // Efek transparansi
  };

  const titleStyle = {
    fontSize: "30px", // Ukuran font teks
    fontWeight: "bold", // Teks tebal
    fontFamily: "Playfair Display, serif", // Font family
    color: "white", // Warna teks agar terlihat di atas latar belakang
    margin: 0, // Menghilangkan margin bawaan
  };

  return (
    <div style={containerStyle}>
      <hr style={hrStyle} />
      <h1 style={titleStyle}>Semua Menu</h1>
      <hr style={hrStyle} />
    </div>
  );
};

export default SemuaMenuHeader;
