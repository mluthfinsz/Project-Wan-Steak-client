// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SelamatDatang = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Mengatur timer untuk mengarahkan ke halaman Dashboard setelah 2 detik
//     const timer = setTimeout(() => {
//       navigate("/dashboard"); // Ganti dengan path halaman Dashboard Anda
//     }, 2000);

//     // Membersihkan timer saat komponen unmount
//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh", // Full height screen
//         backgroundColor: "#344A1F", // Warna latar belakang
//         color: "white", // Warna teks
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1>Selamat Datang</h1>
//     </div>
//   );
// };

// export default SelamatDatang;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SelamatDatang = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Mengatur timer untuk mengarahkan ke halaman Dashboard setelah 2 detik
    const timer = setTimeout(() => {
      navigate("/dashboard"); // Ganti dengan path halaman Dashboard Anda
    }, 2000);

    // Membersihkan timer saat komponen unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  // Gaya untuk bulatan blur
  const circleStyle = {
    position: "absolute",
    width: "100px",
    height: "300px",
    background: "linear-gradient(50deg, #00FFFF, #0000FF)",
    borderRadius: "50%",
    filter: "blur(95px)",
    zIndex: -1,
  };

  // Posisi masing-masing bulatan
  const circle1Style = {
    ...circleStyle,
    top: "-25%",
    left: "15%",
  };

  const circle2Style = {
    ...circleStyle,
    bottom: "5%",
    right: "10%",
  };

  const circle3Style = {
    ...circleStyle,
    top: "40%",
    left: "-10%",
  };

  // Gaya untuk container utama
  const containerStyle = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    margin: 0,
    backgroundColor: "#344A1F", // Warna latar belakang
    color: "white", // Warna teks
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      {/* Bulatan blur */}
      <div style={circle1Style}></div>
      <div style={circle2Style}></div>
      <div style={circle3Style}></div>

      {/* Konten utama */}
      <h1>Selamat Datang</h1>
    </div>
  );
};

export default SelamatDatang;
