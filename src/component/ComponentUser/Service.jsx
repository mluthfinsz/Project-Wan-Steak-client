// src/components/RectangleWithIcons.jsx
import React from "react";
import icon1 from "../../assets/image/icon3.png"; // Ganti path sesuai lokasi file Anda
import icon2 from "../../assets/image/icon2.png";
import icon3 from "../../assets/image/icon1.png";

const RectangleWithIcons = () => {
  return (
    <div
      style={{
        width: "100%", // Lebar penuh
        backgroundColor: "#344A1F", // Warna rectangle
        padding: "40px 0", // Padding atas dan bawah
        display: "flex", // Gunakan flexbox untuk menata konten
        justifyContent: "space-around", // Spasi antar ikon merata
        alignItems: "center", // Pusatkan konten secara vertikal
        borderRadius: "0", // Hilangkan sudut membulat
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Efek bayangan
        overflow: "hidden", // Hilangkan kemungkinan scroll
        position: "relative", // Pastikan elemen tetap di posisi relatif
      }}
    >
      {/* Icon 1 */}
      <div style={{ textAlign: "center" }}>
        <img
          src={icon1}
          alt="Icon 1"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      {/* Icon 2 */}
      <div style={{ textAlign: "center" }}>
        <img
          src={icon2}
          alt="Icon 2"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      {/* Icon 3 */}
      <div style={{ textAlign: "center" }}>
        <img
          src={icon3}
          alt="Icon 3"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </div>
  );
};

export default RectangleWithIcons;
