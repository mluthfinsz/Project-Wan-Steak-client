// import React from "react";
// import backgroundImage from "../../assets/image/Bg2.jpg"; // Sesuaikan path dengan gambar Anda

// const TentangKami = () => {
//   return (
//     <div
//       style={{
//         textAlign: "center", // Center the content
//         backgroundImage: `url(${backgroundImage})`, // Menambahkan gambar latar belakang
//         backgroundSize: "contain", // Menampilkan gambar sepenuhnya
//         backgroundPosition: "center", // Menempatkan gambar di tengah
//         backgroundRepeat: "no-repeat", // Mencegah pengulangan gambar
//         minHeight: "50vh", // Mengatur tinggi minimal
//         display: "flex", // Gunakan flexbox untuk pusatkan konten
//         alignItems: "center", // Vertikal di tengah
//         justifyContent: "center", // Horizontal di tengah
//         color: "white", // Warna teks agar kontras dengan latar belakang
//         padding: "20px", // Optional padding untuk konten
//       }}
//     >
//       <div
//         style={{
//           padding: "20px",
//           borderRadius: "10px",
//           maxWidth: "800px", // Perbesar lebar maksimum
//           width: "90%", // Responsif untuk layar kecil
//         }}
//       >
//         {/* New h1 Title */}
//         <h2
//           style={{
//             // fontSize: "30px", // Larger font size for the title
//             fontWeight: "bold", // Bold text
//             fontFamily: "Playfair Display, serif",
//             lineHeight: "1.3", // Spacing between lines
//             marginBottom: "20px", // Jarak bawah dengan tombol
//             color: "black",
//           }}
//         >
//           Mau Tahu Kenapa Steak Kami Rasanya Begitu Elite, Tapi Harganya Irit?
//         </h2>
//         <h1
//           style={{
//             fontSize: "3.2rem", // Larger font size for the title
//             fontWeight: "bold", // Bold text
//             fontFamily: "Playfair Display, serif",
//             lineHeight: "1.3", // Spacing between lines
//             marginBottom: "20px", // Jarak bawah dengan tombol
//           }}
//         >
//           <span style={{ color: "#F4BE16" }}>Rasa Elite</span>{" "}
//           <span style={{ color: "#344A1F" }}>Harga Irit</span>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default TentangKami;
import React from "react";
import backgroundImage from "../../assets/image/Bg2.jpg"; // Sesuaikan path dengan gambar Anda

const TentangKami = () => {
  return (
    <div
      style={{
        textAlign: "center", // Center the content
        backgroundImage: `url(${backgroundImage})`, // Menambahkan gambar latar belakang
        backgroundSize: "contain", // Menampilkan gambar sepenuhnya
        backgroundPosition: "center", // Menempatkan gambar di tengah
        backgroundRepeat: "no-repeat", // Mencegah pengulangan gambar
        minHeight: "50vh", // Mengatur tinggi minimal
        display: "flex", // Gunakan flexbox untuk pusatkan konten
        alignItems: "center", // Vertikal di tengah
        justifyContent: "center", // Horizontal di tengah
        color: "white", // Warna teks agar kontras dengan latar belakang
        padding: "20px", // Optional padding untuk konten
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "1250px", // Batasi kontainer maksimal
          width: "100%", // Pastikan kontainer mengambil lebar penuh
        }}
      >
        {/* New h1 Title */}
        <h1
          style={{
            fontWeight: "bold", // Bold text
            fontFamily: "Playfair Display, serif",
            lineHeight: "1.3", // Spacing between lines
            marginBottom: "50px", // Jarak bawah
            color: "#344A1F",
            textShadow: "-11px -11px 4px rgba(0, 0, 0, 0.2)", // Drop shadow effect
            maxWidth: "1000px", // Atur lebar maksimum lebih kecil untuk h1
            margin: "0 auto", // Center secara horizontal
          }}
        >
          Mau Tahu Kenapa Steak Kami Rasanya Begitu Elite, Tapi Harganya Irit?
        </h1>
        <p
          style={{
            fontSize: "1.2rem", // Ukuran font teks
            fontWeight: "400", // Normal weight
            fontFamily: "Playfair Display, serif", // Gaya font
            lineHeight: "1.8", // Jarak antar baris
            color: "black", // Warna teks abu-abu
            textAlign: "center", // Ratakan teks
            marginTop: "20px", // Jarak atas
            width: "100%", // Pastikan teks memanjang penuh
            margin: "0 auto", // Center teks secara horizontal
            padding: "0", // Menghilangkan padding
          }}
        >
          "Kami menyajikan steak premium dengan kualitas terbaik, diracik dari
          bahan pilihan dan teknik memasak unggul. Harga tetap terjangkau berkat
          efisiensi operasional dan dukungan dari mitra lokal, menghadirkan
          pengalaman rasa elite untuk semua kalangan.""
        </p>
      </div>
    </div>
  );
};

export default TentangKami;
