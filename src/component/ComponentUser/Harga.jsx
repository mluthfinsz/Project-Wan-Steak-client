import React from "react";
import backgroundImage from "../../assets/image/harga.jpg"; // Sesuaikan path dengan gambar Anda

const TentangKami = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Menambahkan gambar latar belakang
        backgroundSize: "cover", // Memastikan gambar memenuhi seluruh area
        backgroundPosition: "center", // Menempatkan gambar di tengah
        backgroundRepeat: "no-repeat", // Mencegah pengulangan gambar
        width: "auto", // Lebar penuh layar
        height: "100vh", // Tinggi penuh layar
        margin: 0, // Menghapus margin
        padding: 0, // Menghapus padding
      }}
    >
      {/* Tidak ada konten tambahan */}
    </div>
  );
};

export default TentangKami;
