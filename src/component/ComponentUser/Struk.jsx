
import React from "react";
import { useNavigate } from "react-router-dom";

const Struk = ({ namaPelanggan, meja, items, totalHarga, tanggal }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#344A1F",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          fontFamily: "Rasa, serif",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "28px",
            color: "white", // menambahkan warna putih pada teks
          }}
        >
          Struk Pembelian
        </h4>
        <div style={{ marginBottom: "10px", fontSize: "20px", color: "white" }}>
          <strong>Nama Pelanggan:</strong> {namaPelanggan}
        </div>
        <div style={{ marginBottom: "10px", fontSize: "20px", color: "white" }}>
          <strong>No Meja:</strong> {meja}
        </div>
        <div style={{ marginBottom: "10px", fontSize: "20px", color: "white" }}>
          <strong>Tanggal:</strong> {tanggal}
        </div>
        <hr style={{ borderColor: "#ffffff", margin: "10px 0" }} />
        <table style={{ width: "100%", marginBottom: "10px", color: "white" }}>
          <thead>
            <tr
              style={{
                textAlign: "left",
                borderBottom: "1px solid #ffffff",
                color: "white",
              }}
            >
              <th
                style={{ padding: "5px 0", fontSize: "20px", color: "white" }}
              >
                Item
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "5px 0",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Harga
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "5px 0",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {item.nama}
                </td>
                <td
                  style={{
                    textAlign: "right",
                    padding: "5px 0",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Rp{item.harga.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr style={{ borderColor: "#ffffff", margin: "10px 0" }} />
        <div
          style={{
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          Total: Rp{totalHarga.toLocaleString()}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Rasa, serif",
            color: "white",
            fontStyle: "italic",
            marginTop: "20px",
          }}
        >
          <p style={{ textAlign: "center" }}>
            “Silahkan SCREENSHOOT Struk ini untuk bukti pembayaran”
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => navigate("/beranda")} // Navigasi ke halaman beranda
          style={{
            width: "29%", // Lebar tombol sama dengan panjang struk
            padding: "10px 20px",
            backgroundColor: "#F4BE16",
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default Struk;
