import React from "react";
import { Card, Button } from "react-bootstrap";

// CardBerita Komponen untuk menampilkan daftar berita
const CardBerita = ({ berita, onClick }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card
        style={{
          height: "100%", // Tinggi seragam untuk card
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)", // Drop shadow
          borderRadius: "12px", // Border radius untuk card
          border: "none", // Hilangkan border default
          overflow: "hidden", // Agar isi card mengikuti border-radius
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animasi transisi
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)"; // Zoom card saat hover
          e.currentTarget.style.boxShadow = "0px 6px 40px rgba(0, 0, 0, 0.3)"; // Shadow lebih intens saat hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // Kembali ke ukuran normal
          e.currentTarget.style.boxShadow = "0px 4px 30px rgba(0, 0, 0, 0.2)"; // Shadow asli
        }}
      >
        <Card.Img
          variant="top"
          src={berita.image}
          alt={berita.judul}
          style={{
            height: "300px", // Tinggi gambar seragam
            objectFit: "cover", // Mengisi gambar tanpa distorsi
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "Rasa, serif",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {berita.judul}
          </Card.Title>
          <Card.Text style={{ fontFamily: "Rasa, serif", fontSize: "16px" }}>
            {berita.deskripsi}
          </Card.Text>
          <Button
            variant="link"
            className="float-end"
            onClick={() => onClick(berita)}
            style={{
              fontFamily: "Rasa, serif",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Baca Selengkapnya
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBerita;
