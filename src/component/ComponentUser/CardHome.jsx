import React from "react";
import { Button, Card } from "react-bootstrap";
import image from "../../assets/image/steak.jpg"; // Import foto

const HomeCard = () => {
  return (
    <Card
      style={{
        width: "90%", // Lebar card responsif, mengisi 90% layar
        maxWidth: "1200px", // Tetap ada batas maksimum
        margin: "5vh auto", // Margin vertikal responsif
        padding: "3vw", // Padding responsif terhadap lebar viewport
        borderRadius: "1.5vw", // Border radius proporsional
        boxShadow: "0px 0.4vw 1vw rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexWrap: "wrap", // Agar elemen otomatis pindah ke baris baru jika sempit
        flexDirection: "row", // Default layout adalah baris
        alignItems: "center",
        gap: "2vw", // Spasi antara elemen
      }}
    >
      {/* Bagian Kiri: Teks */}
      <div
        style={{
          flex: "1 1 300px", // Fleksibilitas untuk mengatur lebar minimal 300px
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "left", // Teks berada di kiri
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)", // Ukuran font responsif
            marginBottom: "1rem",
            fontFamily: "Libre Caslon Text, serif",
          }}
        >
          Rasa Elite
          <br />
          Harga Irit
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", // Font size responsif
            marginBottom: "1.5rem",
            fontFamily: "Libre Caslon Text, serif",
            textAlign: "justify",
          }}
        >
          Nikmati kelezatan steak berkualitas tinggi dengan harga yang ramah di
          kantong. Kami menghadirkan cita rasa premium yang menggugah selera,
          cocok untuk semua kalangan. Dengan bahan pilihan dan olahan istimewa,
          setiap hidangan kami dibuat untuk memberikan pengalaman makan steak
          terbaik tanpa membuat dompet Anda kosong.
        </p>
        <div>
          <Button
            variant="primary"
            style={{
              padding: "0.5rem 1rem", // Padding responsif
              borderRadius: "0.5rem",
              marginRight: "0.5rem",
            }}
          >
            Button 1
          </Button>
          <Button
            variant="secondary"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
            }}
          >
            Button 2
          </Button>
        </div>
      </div>

      {/* Bagian Kanan: Gambar */}
      <div
        style={{
          flex: "1 1 300px", // Fleksibilitas untuk mengatur lebar minimal 300px
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt="Example"
          style={{
            width: "100%", // Mengisi 100% dari kontainer
            maxWidth: "500px", // Batas maksimum
            height: "auto",
            borderRadius: "1vw",
            boxShadow: "0px 0.4vw 1vw rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </Card>
  );
};

export default HomeCard;
