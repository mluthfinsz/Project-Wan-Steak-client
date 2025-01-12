import React from "react";
import { Button } from "react-bootstrap";

// IsiBerita Komponen untuk menampilkan isi lengkap berita
const IsiBerita = ({ berita, onBack }) => {
  if (!berita) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <Button
        variant="secondary"
        className="mb-4"
        onClick={onBack}
        style={{ fontFamily: "Rasa, serif", fontSize: "16px" }}
      >
        Back
      </Button>
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "Rasa, serif",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        {berita.judul}
      </h2>
      <img
        src={berita.image}
        alt={berita.judul}
        className="img-fluid mb-4"
        style={{
          maxHeight: "400px",
          objectFit: "cover",
          width: "100%",
          borderRadius: "8px",
        }}
      />
      <p
        style={{
          fontFamily: "Rasa, serif",
          fontSize: "18px",
          lineHeight: "1.6",
        }}
      >
        {berita.isi}
      </p>
    </div>
  );
};

export default IsiBerita;
