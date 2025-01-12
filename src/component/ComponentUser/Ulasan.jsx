import React, { useState } from "react";
import axios from "axios";
import myImage from "../../assets/image/bg1.png"; // Path gambar
import Wan from "../../assets/image/Bg3.jpg"; // Path gambar

const FormUlasan = () => {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const submitUlasan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/ulasan", {
        nama,
        deskripsi,
        rating,
      });
      alert("Ulasan berhasil disimpan!");
      setNama("");
      setDeskripsi("");
      setRating(0);
      setHover(0);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Gagal menyimpan ulasan.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        marginBottom: "100px",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          width: "100%",
          gap: "40px", // Memberikan jarak antara kolom kiri dan kanan
          overflow: "hidden",
        }}
      >
        {/* Kolom kiri: Gambar dan paragraf */}
        <div
          style={{
            flex: "1",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "black",
              fontSize: "24px",
              fontFamily: "Rasa, serif",
              textAlign: "justify",
              marginBottom: "30px",
              margin: "0",
            }}
          >
            "Bagikan pengalaman Anda bersama kami. Ulasan Anda sangat berarti
            untuk kami!"
          </p>
          <img
            src={Wan}
            alt="Deskripsi Gambar"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              marginBottom: "15px",
              boxShadow: "-25px -15px 25px rgba(0, 0, 0, 0.3)", // Efek drop shadow
            }}
          />
        </div>

        {/* Kolom kanan: Form */}
        <div
          style={{
            flex: "1",
            padding: "20px",
          }}
        >
          <form onSubmit={submitUlasan}>
            <div className="mb-3">
              <label
                htmlFor="nama"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  display: "block",
                  marginBottom: "8px",
                  fontFamily: "Playfair Display, serif",
                  color: "bold",
                }}
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  marginBottom: "15px",
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="deskripsi"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  display: "block",
                  marginBottom: "8px",
                  fontFamily: "Playfair Display, serif",
                  color: "bold",
                }}
              >
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  marginBottom: "15px",
                }}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                htmlFor="rating"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  display: "block",
                  marginBottom: "8px",
                  fontFamily: "Playfair Display, serif",
                  color: "bold",
                }}
              >
                Rating
              </label>
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <span
                      key={index}
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                      style={{
                        cursor: "pointer",
                        color:
                          ratingValue <= (hover || rating)
                            ? "#f39c12"
                            : "#bdc3c7",
                        transition: "color 0.2s ease-in-out",
                      }}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#F4BE16",
                fontFamily: "Playfair Display, serif",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#F4BE16")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#F4BE16")}
            >
              Kirim Ulasan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUlasan;
