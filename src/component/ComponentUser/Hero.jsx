import React from "react";
import backgroundImage from "../../assets/image/Home.jpg"; // Sesuaikan path dengan gambar Anda

const TentangKami = () => {
  return (
    <div
      style={{
        textAlign: "center", // Center the content
        backgroundImage: `url(${backgroundImage})`, // Menambahkan gambar latar belakang
        backgroundSize: "contain", // Menampilkan gambar sepenuhnya
        backgroundPosition: "center", // Menempatkan gambar di tengah
        backgroundRepeat: "no-repeat", // Mencegah pengulangan gambar
        minHeight: "90vh", // Mengatur tinggi minimal
        display: "flex", // Gunakan flexbox untuk pusatkan konten
        alignItems: "center", // Vertikal di tengah
        justifyContent: "center", // Horizontal di tengah
        color: "white", // Warna teks agar kontras dengan latar belakang
        padding: "20px", // Optional padding untuk konten
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "10px", // Membuat sudut elemen membulat
          maxWidth: "600px", // Batasi lebar maksimum konten
          width: "90%", // Responsif untuk layar kecil
        }}
      >
        {/* New h1 Title */}
        <h1
          style={{
            fontSize: "2.5rem", // Larger font size for the title
            fontWeight: "bold", // Bold text
            fontFamily: "Plaster, serif",
            lineHeight: "1.3", // Spacing between lines
            marginBottom: "20px", // Jarak bawah dengan tombol
            color: "black",
          }}
        >
          Wan Steak Corner
        </h1>
        <h1
          style={{
            fontSize: "3.2rem", // Larger font size for the title
            fontWeight: "bold", // Bold text
            fontFamily: "Playfair Display, serif",
            lineHeight: "1.3", // Spacing between lines
            marginBottom: "20px", // Jarak bawah dengan tombol
          }}
        >
          <span style={{ color: "#F4BE16" }}>Rasa Elite</span>{" "}
          <span style={{ color: "#344A1F" }}>Harga Irit</span>
        </h1>

        {/* Button */}
        <button
          style={{
            backgroundColor: "#344A1F", // Warna tombol oranye
            color: "white", // Warna teks tombol
            border: "none", // Hilangkan border
            padding: "9px 30px", // Ukuran tombol lebih kecil
            fontSize: "0.9em", // Ukuran font tombol lebih kecil
            borderRadius: "10px", // Membuat sudut tombol membulat
            cursor: "pointer", // Menunjukkan pointer saat hover
            transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Transisi untuk hover dan shadow
            marginTop: "30px", // Pindahkan tombol lebih ke bawah
            boxShadow: "0 13px 10px rgba(0, 0, 0, 0.2)", // Efek drop shadow
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#cc8400"; // Warna hover
            e.target.style.boxShadow = "0 15px 12px rgba(0, 0, 0, 0.3)"; // Efek shadow saat hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#FFA500"; // Warna asli
            e.target.style.boxShadow = "0 13px 10px rgba(0, 0, 0, 0.2)"; // Shadow asli
          }}
        >
          Pesan
        </button>
      </div>
    </div>
  );
};

export default TentangKami;
