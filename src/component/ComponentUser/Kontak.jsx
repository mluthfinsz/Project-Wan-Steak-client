import React, { useState } from "react";
import backgroundImage from "../../assets/image/bg1.png"; // Ganti path gambar sesuai dengan lokasi gambar Anda
const FormKontak = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState(""); // Mengganti deskripsi menjadi pesan

  const submitKontak = async (e) => {
    e.preventDefault();

    const kontakData = {
      nama: nama,
      email: email,
      pesan: pesan, // Mengirim pesan
    };

    try {
      const response = await fetch("http://localhost:5000/api/submit-kontak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(kontakData),
      });

      const result = await response.json();
      if (response.status === 201) {
        alert(
          `Kontak berhasil disimpan! \nNama: ${result.kontak.nama}\nEmail: ${result.kontak.email}\nPesan: ${result.kontak.pesan}`
        );
        setNama("");
        setEmail("");
        setPesan(""); // Reset pesan
      } else {
        alert("Gagal menyimpan kontak");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan pada server");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
        flexDirection: "column",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "black",
          marginBottom: "20px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Hubungi Kami
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "black",
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "Rasa, serif",
          maxWidth: "1000px",
          wordWrap: "break-word",
          lineHeight: "1.6",
        }}
      >
        Kami di Wan Steak Corner siap mendengar setiap saran, masukan, atau
        pertanyaan dari Anda. Jangan ragu untuk menghubungi kami melalui
        formulir di bawah ini atau melalui informasi kontak yang tersedia.
      </p>

      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={submitKontak}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="mb-3" style={{ flex: "1", marginRight: "10px" }}>
              <label
                htmlFor="nama"
                style={{
                  fontWeight: "bold",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan Nama"
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

            <div className="mb-3" style={{ flex: "1", marginLeft: "10px" }}>
              <label
                htmlFor="email"
                style={{
                  fontWeight: "bold",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email"
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
          </div>

          <div className="mb-3">
            <label
              htmlFor="pesan"
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Pesan
            </label>
            <textarea
              id="pesan"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)} // Mengubah state pesan
              placeholder="Isi pesan Anda"
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

          <button
            type="submit"
            style={{
              width: "70%",
              padding: "12px",
              backgroundColor: "#F4BE16",
              fontFamily: "Playfair Display, serif",
              color: "#fff",
              alignContent: "center",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              display: "block",
              margin: "0 auto",
            }}
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormKontak;
