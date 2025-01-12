// import React from "react";
// import { Card } from "react-bootstrap";
// import image from "../../assets/image/steak.jpg"; // Gambar impor

// const FeatureCard = () => {
//   return (
//     <Card
//       style={{
//         width: "90%",
//         maxWidth: "1200px", // Batas maksimum lebar
//         margin: "5vh auto", // Jarak atas dan bawah responsif
//         display: "flex",
//         flexWrap: "wrap", // Membungkus elemen agar responsif
//         flexDirection: "row", // Default layout: gambar di kiri, teks di kanan
//         alignItems: "center",
//         backgroundColor: "transparent", // Tidak ada warna background
//         overflow: "hidden", // Hilangkan elemen keluar
//         border: "none", // Hilangkan border card
//       }}
//     >
//       {/* Bagian Kiri: Gambar */}
//       <div
//         style={{
//           flex: "1 1 300px", // Lebar minimal 300px
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={image}
//           alt="Steak"
//           style={{
//             width: "100%",
//             maxWidth: "500px", // Ukuran maksimum gambar
//             height: "auto",
//           }}
//         />
//       </div>

//       {/* Bagian Kanan: Teks */}
//       <div
//         style={{
//           flex: "1 1 300px", // Lebar minimal 300px
//           padding: "2vw",
//           textAlign: "left",
//           color: "white", // Warna font menjadi putih
//           fontFamily: "Libre Caslon Text, serif",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "clamp(1.5rem, 2.5vw, 2rem)", // Responsif terhadap layar
//             marginBottom: "1rem",
//           }}
//         >
//           Keistimewaan di Balik Setiap Sajian
//         </h1>
//         <p
//           style={{
//             fontSize: "clamp(1rem, 1.5vw, 1.2rem)", // Responsif
//             lineHeight: "1.6",
//             textAlign: "justify",
//           }}
//         >
//           Setiap sajian kami dibuat dengan dedikasi tinggi, menggunakan bahan
//           pilihan terbaik yang diolah oleh chef berpengalaman. Nikmati harmoni
//           rasa yang memanjakan lidah di setiap gigitan. Kami percaya bahwa
//           makanan berkualitas tidak hanya memberi kepuasan fisik, tetapi juga
//           kebahagiaan batin.
//         </p>
//       </div>
//     </Card>
//   );
// };

// export default FeatureCard;

import React from "react";
import { Card } from "react-bootstrap";
import image from "../../assets/image/steak.jpg"; // Gambar impor

const FeatureCard = () => {
  return (
    <Card
      style={{
        width: "90%",
        maxWidth: "1200px", // Batas maksimum lebar
        margin: "auto", // Jarak fleksibel, tidak menambah ruang di bawah
        display: "flex",
        flexWrap: "wrap", // Membungkus elemen agar responsif
        flexDirection: "row", // Default layout: gambar di kiri, teks di kanan
        alignItems: "center",
        backgroundColor: "transparent", // Tidak ada warna background
        overflow: "hidden", // Hilangkan elemen keluar
        border: "none", // Hilangkan border card
      }}
    >
      {/* Bagian Kiri: Gambar */}
      <div
        style={{
          flex: "1 1 300px", // Lebar minimal 300px
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="Steak"
          style={{
            width: "100%",
            maxWidth: "500px", // Ukuran maksimum gambar
            height: "auto",
          }}
        />
      </div>

      {/* Bagian Kanan: Teks */}
      <div
        style={{
          flex: "1 1 300px", // Lebar minimal 300px
          padding: "2vw",
          textAlign: "left",
          color: "white", // Warna font menjadi putih
          fontFamily: "Libre Caslon Text, serif",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)", // Responsif terhadap layar
            marginBottom: "1rem",
          }}
        >
          Keistimewaan di Balik Setiap Sajian
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", // Responsif
            lineHeight: "1.6",
            textAlign: "justify",
          }}
        >
          Potongan ayam tanpa tulang berkualitas yang dimarinasi dengan bumbu
          rahasia kemudian dipanggang hingga matang sempuran
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;
