import React from "react";
import Image1 from "../../assets/image/Bg3.jpg"; // Ganti dengan path gambar pertama
import Image2 from "../../assets/image/Bg4.jpg"; // Ganti dengan path gambar kedua

const ResponsifKomponen = () => {
  const containerStyle = {
    textAlign: "justify", // Untuk konten tengah
    // padding: "px",
    maxWidth: "1300px",
    margin: "0 auto", // Center container secara horizontal
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
    fontFamily: "Playfair Display, serif",
  };

  const hrStyle = {
    width: "36%", // Lebar garis
    // border: "5px solid #344A1F", // Warna dan gaya garis
    margin: "10px 0 50px 0", // Margin atas, kanan, bawah, dan kiri

    border: "none", // Menghapus border bawaan
    height: "10px", // Ketebalan garis
    backgroundColor: "#F4BE16", // Warna putih penuh
    opacity: 1, // Tidak ada transparansi
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "space-around", // Posisikan gambar kanan-kiri
    alignItems: "center",
    flexWrap: "wrap", // Agar responsif di layar kecil
    gap: "20px",
  };

  const imageStyle = {
    width: "500px", // Lebar gambar 400px
    height: "400px", // Tinggi gambar 400px
    objectFit: "cover", // Mengatur agar gambar tetap terisi area dan tidak terdistorsi
    borderRadius: "8px", // Membuat gambar bersudut melengkung
    boxShadow: "1px 4px 20px 10px rgba(0, 0, 0, 0.2)", // Drop shadow
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animasi transisi
  };

  const paragraphStyle = {
    fontSize: "22px",
    color: "black",
    lineHeight: "1.5",
    marginTop: "50px",
    padding: "0 10px",
    fontFamily: "Rasa, serif",
  };

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h1 style={headingStyle}>Cerita Wan Steak Corner</h1>
      <hr style={hrStyle} />

      {/* Image Container */}
      <div style={imageContainerStyle}>
        <img
          src={Image1}
          alt="Gambar 1"
          style={imageStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)"; // Perbesar saat hover
            e.target.style.boxShadow = "1px 4px 25px 15px rgba(0, 0, 0, 0.3)"; // Tambahkan efek shadow saat hover
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)"; // Kembali ke ukuran normal
            e.target.style.boxShadow = "1px 4px 20px 10px rgba(0, 0, 0, 0.2)"; // Shadow asli
          }}
        />
        <img
          src={Image2}
          alt="Gambar 2"
          style={imageStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "1px 4px 25px 15px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "1px 4px 20px 10px rgba(0, 0, 0, 0.2)";
          }}
        />
      </div>

      {/* Paragraph */}
      <p style={paragraphStyle}>
        Wan Steak Corner didirikan pada bulan Januari 2024, dengan fokus pada
        penyediaan chicken steak berkualitas tinggi. Kami menawarkan tiga varian
        saus yang lezat, yaitu barbeque, blackpepper, dan creamy mushroom, yang
        dapat dipilih oleh pelanggan sesuai dengan selera mereka. Selain itu,
        kami juga menyediakan berbagai minuman teh dengan beberapa varian rasa
        buah, menjadikan pengalaman bersantap di cafe kami lebih lengkap dan
        menyenangkan.
      </p>
    </div>
  );
};

export default ResponsifKomponen;
