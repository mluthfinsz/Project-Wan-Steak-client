import React from "react";

const TentangKami = () => {
  return (
    <div
      style={{
        width: "100%", // Full width to touch the left and right edges
        backgroundColor: "#d9d9d9", // Light background color for contrast
        padding: "100px 0", // Increased vertical padding for height
        textAlign: "center", // Center the content
        marginTop: "50px", // Optional margin from top
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for depth
      }}
    >
      {/* Title */}
      <h2 style={{ margin: 0 }}>TENTANG KAMI</h2>

      {/* Border line below the title */}
      <div
        style={{
          width: "35%",
          height: "5px",
          backgroundColor: "#ffffff", // White border color
          margin: "10px auto 20px", // Center the line and add spacing
        }}
      ></div>

      {/* Paragraph */}
      <p style={{ fontSize: "1rem", width: "80%", margin: "0 auto" }}>
        "Ini adalah halaman yang menceritakan siapa kami, apa yang kami
        tawarkan, dan mengapa kami ada. Kami di Steak Elite hadir untuk
        memberikan pengalaman kuliner terbaik dengan rasa premium dan harga yang
        terjangkau, karena kami percaya bahwa setiap orang berhak menikmati
        makanan berkualitas."
      </p>
    </div>
  );
};

export default TentangKami;
