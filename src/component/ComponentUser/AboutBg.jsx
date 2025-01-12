import React from "react";

const CustomBackground = () => {
  const containerStyle = {
    backgroundColor: "#344d2f", // Warna hijau tua
    height: "50vh", // Tinggi layar setengah
    position: "relative", // Untuk pseudo-elemen
    overflow: "hidden", // Agar elemen tidak keluar dari area
    display: "flex", // Untuk memposisikan konten di tengah
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };
  const headingStyle = {
    fontSize: "40px", // Ukuran teks
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold", // Membuat teks tebal
    color: "white", // Warna teks
    marginBottom: "10px", // Jarak bawah dengan elemen berikutnya
    letterSpacing: "2px", // Jarak antar huruf
  };

  const leftShapeStyle1 = {
    position: "absolute",
    top: 0,
    left: "10px", // Geser sedikit ke kanan
    width: "40px", // Lebar bentuk putih pertama
    height: "100px",
    backgroundColor: "white",
    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
  };

  const leftShapeStyle2 = {
    position: "absolute",
    top: 0,
    left: "60px", // Geser lebih ke kanan
    width: "40px", // Lebar bentuk putih kedua
    height: "100px",
    backgroundColor: "white",
    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
  };

  const rightShapeStyle1 = {
    position: "absolute",
    bottom: 0,
    right: "10px", // Geser sedikit ke kiri
    width: "40px",
    height: "100px",
    backgroundColor: "white",
    clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
  };

  const rightShapeStyle2 = {
    position: "absolute",
    bottom: 0,
    right: "60px", // Geser lebih ke kiri
    width: "40px",
    height: "100px",
    backgroundColor: "white",
    clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
  };

  const hrStyle = {
    width: "50%", // Panjang garis
    border: "none", // Menghapus border bawaan
    height: "10px", // Ketebalan garis
    backgroundColor: "#FFFFFF", // Warna putih penuh
    opacity: 1, // Tidak ada transparansi
    margin: "10px auto", // Jarak atas-bawah, dan tengah
  };

  const paragraphStyle = {
    maxWidth: "1000px", // Lebar maksimum paragraf
    margin: "0 auto", // Agar paragraf berada di tengah
    lineHeight: "1.6", // Jarak antar baris
    fontFamily: "Rasa, serif",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      {/* Bentuk putih di kiri atas */}
      <div style={leftShapeStyle1}></div>
      <div style={leftShapeStyle2}></div>

      {/* Bentuk putih di kanan bawah */}
      <div style={rightShapeStyle1}></div>
      <div style={rightShapeStyle2}></div>

      {/* Konten di tengah */}
      <h1 style={headingStyle}>Tentang Wan Steak Corner</h1>

      <hr style={hrStyle} />
      <p style={paragraphStyle}>
        Ini adalah halaman yang menceritakan siapa kami, apa yang kami tawarkan,
        dan mengapa kami ada. Kami di Steak Elite hadir untuk memberikan
        pengalaman kuliner terbaik dengan rasa premium dan harga yang
        terjangkau, karena kami percaya bahwa setiap orang berhak menikmati
        makanan berkualitas.
      </p>
    </div>
  );
};

export default CustomBackground;
