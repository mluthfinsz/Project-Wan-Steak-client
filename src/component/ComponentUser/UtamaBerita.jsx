import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardBerita from "./CardBerita";
import IsiBerita from "./IsiBerita";

// Mengimpor gambar dari folder assets/images
import Bg1 from "../../assets/image/Berita1.jpg";

const Berita = () => {
  const [selectedBerita, setSelectedBerita] = useState(null);

  const beritaList = [
    {
      id: 1,
      judul: "Menyambut Jumat Berkah",
      deskripsi: "Chicken Steak",
      image: Bg1, // Gambar dari folder lokal
      isi: "Alhamdulillah menyambut jumat berkah dengan pesanan 60 box Chicken Steak di restoran CHICKENSTEAK99! Nikmati sajian lezat dan berkah untuk menyemarakkan hari kita.",
    },
  ];

  const handleBacaSelengkapnya = (berita) => {
    setSelectedBerita(berita);
  };

  const handleBack = () => {
    setSelectedBerita(null); // Reset ke null untuk kembali ke daftar berita
  };

  const hrStyle = {
    width: "15%", // Lebar garis
    margin: "10px 0 50px 0", // Margin atas, kanan, bawah, dan kiri
    border: "none", // Menghapus border bawaan
    height: "10px", // Ketebalan garis
    backgroundColor: "#F4BE16", // Warna garis
    opacity: 1, // Tidak ada transparansi
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
    fontFamily: "Playfair Display, serif",
  };

  return (
    <div>
      {selectedBerita ? (
        <IsiBerita berita={selectedBerita} onBack={handleBack} />
      ) : (
        <Container>
          <h2 style={headingStyle}>Wan News</h2>
          <hr style={hrStyle} />
          <Row>
            {beritaList.map((berita) => (
              <CardBerita
                key={berita.id}
                berita={berita}
                onClick={handleBacaSelengkapnya}
              />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Berita;
