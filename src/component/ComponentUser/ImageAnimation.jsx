import React from "react";
import steakPattern from "../../assets/image/steak.png";

const HomeDescription = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${steakPattern}), linear-gradient(1deg,rgb(157, 157, 157),rgb(255, 255, 255))`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        padding: "30px",
        borderRadius: "15px",
        margin: "30px auto",
        maxWidth: "auto",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: "2rem",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
        }}
      >
        Nikmati Steak Terbaik untuk Semua Kalangan!
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        Nikmati kelezatan steak berkualitas tinggi dengan harga yang ramah di
        kantong. Kami menghadirkan cita rasa premium yang menggugah selera,
        cocok untuk semua kalangan. Dengan bahan pilihan dan olahan istimewa,
        setiap hidangan kami dibuat untuk memberikan pengalaman makan steak
        terbaik tanpa membuat dompet Anda kosong.
      </p>
    </div>
  );
};

export default HomeDescription;
