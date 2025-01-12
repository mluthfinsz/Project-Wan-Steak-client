import React from "react";

const BeritaGrid = ({ beritaList }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Berita Terkini
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {beritaList.map((berita, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ fontWeight: "bold", marginBottom: "15px" }}>
              {berita.judul}
            </h4>
            <p style={{ textAlign: "justify" }}>
              {berita.isi.length > 150
                ? `${berita.isi.slice(0, 150)}...`
                : berita.isi}
            </p>
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Baca Selengkapnya
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaGrid;
