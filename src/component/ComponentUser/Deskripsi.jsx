// import React from "react";
// import sampleImage from "../../assets/image/Menus.jpg"; // Ganti path dengan lokasi gambar Anda

// const ImageTextSection = () => {
//   return (
//     <div
//       style={{
//         display: "flex", // Gunakan flexbox untuk menata elemen
//         flexDirection: "row", // Default tata letak horizontal
//         alignItems: "center", // Pusatkan secara vertikal
//         justifyContent: "space-between", // Spasi antar elemen
//         padding: "20px", // Padding keseluruhan
//         maxWidth: "1200px", // Batas lebar maksimal untuk layar besar
//         margin: "20px auto", // Pusatkan elemen secara horizontal
//         gap: "20px", // Jarak antar elemen
//       }}
//     >
//       {/* Bagian Gambar */}
//       <div
//         style={{
//           flex: "1", // Memastikan elemen ini mengambil 1 bagian dari ruang
//           textAlign: "center",
//           position: "relative", // Untuk memastikan shadow tidak memengaruhi layout lain
//           marginRight: "30px", // Menambahkan jarak antara gambar dan teks
//         }}
//       >
//         <img
//           src={sampleImage}
//           alt="Sample"
//           style={{
//             width: "100%", // Lebar penuh dalam container
//             maxWidth: "400px", // Batas lebar gambar
//             height: "auto", // Pertahankan rasio aspek
//             borderRadius: "10px", // Opsional: membuat sudut membulat
//             boxShadow: "-33px -28px 18px 4px rgba(0, 0, 0, 0.15)", // Bayangan gambar sesuai spesifikasi
//           }}
//         />
//       </div>

//       {/* Bagian Teks */}
//       <div
//         style={{
//           flex: "2", // Memastikan elemen ini mengambil 2 bagian dari ruang
//           marginLeft: "30px", // Menambahkan jarak antara teks dan gambar
//         }}
//       >
//         <h3
//           style={{
//             fontSize: "56px", // Ukuran font heading
//             marginBottom: "10px", // Jarak bawah heading
//             color: "#333", // Warna teks heading
//             fontFamily: "Playfair Display, serif",
//           }}
//         >
//           Keistimewaan di Balik Setiap Sajian
//         </h3>
//         <p
//           style={{
//             fontSize: "22px", // Ukuran font paragraf
//             lineHeight: "1.6", // Spasi antar baris
//             color: "black", // Warna teks paragraf
//             fontFamily: "Rasa, serif",
//           }}
//         >
//           Potongan ayam tanpa tulang berkualitas yang dimarinasi dengan bumbu
//           rahasia kemudian dipanggang hingga matang sempurna.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ImageTextSection;
import React from "react";
import sampleImage from "../../assets/image/Menus.jpg"; // Ganti path dengan lokasi gambar Anda

const ImageTextSection = () => {
  return (
    <div
      style={{
        display: "flex", // Gunakan flexbox untuk menata elemen
        flexDirection: "row", // Default tata letak horizontal
        alignItems: "center", // Pusatkan secara vertikal
        justifyContent: "space-between", // Spasi antar elemen
        padding: "40px", // Padding keseluruhan ditingkatkan
        maxWidth: "1200px", // Batas lebar maksimal untuk layar besar
        margin: "40px auto", // Pusatkan elemen secara horizontal
        gap: "30px", // Jarak antar elemen
        backgroundColor: "white", // Warna latar belakang putih
        // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Tambahkan bayangan untuk elemen
        borderRadius: "20px", // Membuat sudut elemen membulat
      }}
    >
      {/* Bagian Gambar */}
      <div
        style={{
          flex: "1", // Memastikan elemen ini mengambil 1 bagian dari ruang
          textAlign: "center",
          position: "relative", // Untuk memastikan shadow tidak memengaruhi layout lain
          marginRight: "30px", // Menambahkan jarak antara gambar dan teks
        }}
      >
        <img
          src={sampleImage}
          alt="Sample"
          style={{
            width: "100%", // Lebar penuh dalam container
            maxWidth: "400px", // Batas lebar gambar
            height: "auto", // Pertahankan rasio aspek
            borderRadius: "10px", // Membuat sudut gambar membulat
            boxShadow: "-33px -28px 18px 4px rgba(0, 0, 0, 0.15)", // Bayangan gambar
          }}
        />
      </div>

      {/* Bagian Teks */}
      <div
        style={{
          flex: "2", // Memastikan elemen ini mengambil 2 bagian dari ruang
          padding: "20px", // Tambahkan padding dalam teks
        }}
      >
        <h3
          style={{
            fontSize: "56px", // Ukuran font heading
            marginBottom: "20px", // Jarak bawah heading
            color: "#333", // Warna teks heading
            fontFamily: "Playfair Display, serif",
          }}
        >
          Keistimewaan di Balik Setiap Sajian
        </h3>
        <p
          style={{
            fontSize: "22px", // Ukuran font paragraf
            lineHeight: "1.8", // Spasi antar baris ditingkatkan
            color: "black", // Warna teks paragraf
            fontFamily: "Rasa, serif",
          }}
        >
          Potongan ayam tanpa tulang berkualitas yang dimarinasi dengan bumbu
          rahasia kemudian dipanggang hingga matang sempurna.
        </p>
      </div>
    </div>
  );
};

export default ImageTextSection;
