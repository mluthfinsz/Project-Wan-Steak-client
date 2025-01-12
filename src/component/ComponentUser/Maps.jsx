// import React from "react";
// import mapImage from "../../assets/image/maps.jpg"; // Sesuaikan path gambar Anda

// const MapLinkComponent = () => {
//   const containerStyle = {
//     maxWidth: "1300px",
//     margin: "0 auto", // Center container secara horizontal
//     textAlign: "justify", // Justify text alignment
//     padding: "20px",
//   };

//   const hrStyle = {
//     width: "36%", // Lebar garis
//     margin: "10px 0 50px 20px", // Tambahkan margin kiri
//     border: "none", // Menghapus border bawaan
//     height: "10px", // Ketebalan garis
//     backgroundColor: "#F4BE16", // Warna garis
//     opacity: 1, // Tidak ada transparansi
//     marginRight: "100px",
//   };

//   const headingStyle = {
//     fontSize: "40px",
//     fontWeight: "bold",
//     color: "black",
//     marginBottom: "10px",
//     fontFamily: "Playfair Display, serif",
//     marginLeft: "0px", // Tambahkan margin kiri
//   };

//   const contentWrapperStyle = {
//     padding: "20px 0", // Padding atas dan bawah
//     width: "100%", // Lebar menyesuaikan container tanpa menyebabkan scroll horizontal
//     display: "flex",
//     justifyContent: "center",
//   };

//   const contentStyle = {
//     display: "flex",
//     justifyContent: "space-around", // Posisikan gambar dan teks secara horizontal
//     alignItems: "center",
//     flexWrap: "wrap", // Responsif di layar kecil
//     gap: "20px", // Jarak antar elemen
//     maxWidth: "1300px", // Batas lebar maksimal
//     padding: "20px", // Padding konten
//   };

//   const imageStyle = {
//     width: "350px", // Lebar gambar lebih kecil
//     height: "250px", // Tinggi gambar lebih kecil
//     objectFit: "cover", // Gambar tetap proporsional
//     borderRadius: "8px", // Membuat gambar bersudut melengkung
//     boxShadow: "1px 4px 20px 10px rgba(0, 0, 0, 0.2)", // Shadow untuk visual
//     cursor: "pointer", // Pointer untuk menunjukkan interaksi
//     marginRight: "20px", // Jarak antara gambar dan teks
//   };

//   const textStyle = {
//     maxWidth: "500px",
//     textAlign: "left",
//   };

//   const linkStyle = {
//     display: "inline-block",
//     padding: "10px 20px",
//     backgroundColor: "#4285F4", // Warna biru ala Google Maps
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Garis Horizontal */}
//       <h2 style={headingStyle}>Lokasi Kami</h2>
//       <hr style={hrStyle} />

//       {/* Konten */}
//       <div style={contentWrapperStyle}>
//         <div style={contentStyle}>
//           {/* Gambar */}
//           <a
//             href="https://maps.app.goo.gl/ZjtcbttCXBPDdN258"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={mapImage}
//               alt="Lokasi di Google Maps"
//               style={imageStyle}
//             />
//           </a>

//           {/* Konten teks */}
//           <div style={textStyle}>
//             <h3
//               style={{
//                 fontSize: "24px",
//                 color: "black",
//                 marginBottom: "10px",
//                 fontFamily: "Playfair Display, serif",
//                 fontWeight: "bold",
//               }}
//             >
//               Alamat Kami
//             </h3>
//             <p
//               style={{
//                 fontSize: "16px",
//                 color: "black",
//                 marginBottom: "20px",
//                 textAlign: "justify",
//                 fontFamily: "Rasa, serif",
//               }}
//             >
//               Jl. Keadilan Raya No 408 RT 01 RW 05, Baktijaya, Depok Timur, Kec.
//               Sukmajaya, Kota Depok, Jawa Barat 16418
//             </p>
//             <a
//               href="https://maps.app.goo.gl/ZjtcbttCXBPDdN258"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={linkStyle}
//             >
//               Buka di Google Maps
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapLinkComponent;
import React from "react";
import mapImage from "../../assets/image/maps.jpg"; // Sesuaikan path gambar Anda

const MapLinkComponent = () => {
  const containerStyle = {
    maxWidth: "1300px",
    margin: "0 auto", // Center container secara horizontal
    textAlign: "justify", // Justify text alignment
    padding: "20px",
  };

  const hrStyle = {
    width: "36%", // Lebar garis
    margin: "10px 0 50px 20px", // Tambahkan margin kiri
    border: "none", // Menghapus border bawaan
    height: "10px", // Ketebalan garis
    backgroundColor: "#F4BE16", // Warna garis
    opacity: 1, // Tidak ada transparansi
    marginRight: "100px",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
    fontFamily: "Playfair Display, serif",
    marginLeft: "0px", // Tambahkan margin kiri
  };

  const contentWrapperStyle = {
    padding: "20px 0", // Padding atas dan bawah
    width: "100%", // Lebar menyesuaikan container tanpa menyebabkan scroll horizontal
    display: "flex",
    justifyContent: "center",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-around", // Posisikan gambar dan teks secara horizontal
    alignItems: "center",
    flexWrap: "wrap", // Responsif di layar kecil
    gap: "20px", // Jarak antar elemen
    width: "1800px", // Batas lebar maksimal
    padding: "40px", // Tambahkan padding untuk memperbesar persegi panjang
    backgroundColor: "#344A1F", // Latar belakang hijau
    borderRadius: "10px", // Sudut membulat
  };

  const imageStyle = {
    width: "350px", // Lebar gambar tetap kecil
    height: "250px", // Tinggi gambar tetap kecil
    objectFit: "cover", // Gambar tetap proporsional
    borderRadius: "8px", // Membuat gambar bersudut melengkung
    boxShadow: "1px 4px 20px 10px rgba(0, 0, 0, 0.2)", // Shadow untuk visual
    cursor: "pointer", // Pointer untuk menunjukkan interaksi
    marginRight: "20px", // Jarak antara gambar dan teks
  };

  const textStyle = {
    maxWidth: "500px",
    textAlign: "left",
  };

  const linkStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#4285F4", // Warna biru ala Google Maps
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      {/* Garis Horizontal */}
      <h2 style={headingStyle}>Lokasi Kami</h2>
      <hr style={hrStyle} />

      {/* Konten dengan latar belakang hijau */}
      <div style={contentWrapperStyle}>
        <div style={contentStyle}>
          {/* Gambar */}
          <a
            href="https://maps.app.goo.gl/ZjtcbttCXBPDdN258"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapImage}
              alt="Lokasi di Google Maps"
              style={imageStyle}
            />
          </a>

          {/* Konten teks */}
          <div style={textStyle}>
            <h3
              style={{
                fontSize: "24px",
                color: "white",
                marginBottom: "10px",
                fontFamily: "Playfair Display, serif",
                fontWeight: "bold",
              }}
            >
              Alamat Kami
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "white",
                marginBottom: "20px",
                textAlign: "justify",
                fontFamily: "Rasa, serif",
              }}
            >
              Jl. Keadilan Raya No 408 RT 01 RW 05, Baktijaya, Depok Timur, Kec.
              Sukmajaya, Kota Depok, Jawa Barat 16418
            </p>
            <a
              href="https://maps.app.goo.gl/ZjtcbttCXBPDdN258"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLinkComponent;
