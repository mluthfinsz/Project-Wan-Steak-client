// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Login from "../component/ComponentAdmin/AdminLogin";
// import HalamanDashboard from "./HalamanDashboardAdmin";
// import sampleImage from "../assets/image/LogoWansteak.png"; // Ensure path is correct

// const HalamanLogin = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate

//   const handleLogin = () => {
//     setAuthenticated(true);
//     navigate("/dashboard"); // Redirect to the dashboard page
//   };

//   const lineStyle = {
//     width: "2px",
//     height: "80vh",
//     backgroundColor: "#0000FF",
//     marginTop: "20vh",
//     marginBottom: "20vh",
//   };

//   const circleStyle = {
//     position: "absolute",
//     width: "100px",
//     height: "300px",
//     background: "linear-gradient(50deg, #00FFFF, #0000FF)",
//     borderRadius: "50%",
//     filter: "blur(95px)",
//     zIndex: -1,
//   };

//   const circle1Style = {
//     ...circleStyle,
//     top: "-25%",
//     left: "15%",
//     animation: "circleAnimation 3s infinite ease-in-out",
//   };

//   const circle2Style = {
//     ...circleStyle,
//     top: "97%",
//     right: "10%",
//     animation: "circleAnimation 3s infinite ease-in-out",
//     animationDelay: "0.5s",
//   };

//   const circle3Style = {
//     ...circleStyle,
//     top: "40%",
//     left: "-10%",
//     animation: "circleAnimation 3s infinite ease-in-out",
//     animationDelay: "1s",
//   };

//   return (
//     <div>
//       {authenticated ? (
//         <HalamanDashboard />
//       ) : (
//         <div
//           className="d-flex vh-100"
//           style={{
//             position: "relative",
//             overflowX: "hidden",
//             overflowY: "hidden",
//             height: "100vh",
//             width: "100vw",
//             margin: 0,
//             backgroundColor: "transparent",
//           }}
//         >
//           {/* Circles in the background */}
//           <div style={circle1Style}></div>
//           <div style={circle2Style}></div>
//           <div style={circle3Style}></div>

//           {/* Left Section: Login Form */}
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{ flex: 1 }}
//           >
//             <Login setAuthenticated={setAuthenticated} onLogin={handleLogin} />
//           </div>

//           {/* Center Section: Two Lines */}
//           <div className="d-flex align-items-center justify-content-center">
//             <div style={{ ...lineStyle, marginRight: "2px" }}></div>
//             <div style={{ ...lineStyle, marginLeft: "2px" }}></div>
//           </div>

//           {/* Right Section: Image and Text */}
//           <div
//             className="d-flex justify-content-center align-items-center"
//             style={{
//               flex: 1,
//               backgroundColor: "transparent",
//               flexDirection: "column",
//               textAlign: "center",
//               gap: "20px",
//             }}
//           >
//             <img
//               src={sampleImage}
//               alt="Deskripsi Gambar"
//               style={{
//                 maxWidth: "30%",
//                 maxHeight: "50vh",
//                 objectFit: "contain",
//                 backgroundColor: "transparent",
//                 display: "block",
//               }}
//             />
//             <div
//               style={{
//                 fontSize: "22px",
//                 fontWeight: "bold",
//                 color: "#0000FF",
//                 fontFamily: "Playfair Display, serif",
//               }}
//             >
//               Selamat Datang di Halaman Admin Wan Steak Corner!
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HalamanLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Login from "../component/ComponentAdmin/AdminLogin";
import HalamanDashboard from "./SelamatDatang";
import sampleImage from "../assets/image/LogoWansteak.png"; // Pastikan path gambar benar

const HalamanLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleLogin = () => {
    setAuthenticated(true);
    navigate("/datang"); // Arahkan ke halaman dashboard setelah login tanpa mengganti history state
  };

  const lineStyle = {
    width: "2px",
    height: "80vh",
    backgroundColor: "#0000FF",
    marginTop: "20vh",
    marginBottom: "20vh",
  };

  const circleStyle = {
    position: "absolute",
    width: "100px",
    height: "300px",
    background: "linear-gradient(50deg, #00FFFF, #0000FF)",
    borderRadius: "50%",
    filter: "blur(95px)",
    zIndex: -1,
  };

  const circle1Style = {
    ...circleStyle,
    top: "-25%",
    left: "15%",
    animation: "circleAnimation 3s infinite ease-in-out",
  };

  const circle2Style = {
    ...circleStyle,
    top: "97%",
    right: "10%",
    animation: "circleAnimation 3s infinite ease-in-out",
    animationDelay: "0.5s",
  };

  const circle3Style = {
    ...circleStyle,
    top: "40%",
    left: "-10%",
    animation: "circleAnimation 3s infinite ease-in-out",
    animationDelay: "1s",
  };

  return (
    <div>
      {authenticated ? (
        // Setelah login, arahkan ke dashboard
        <HalamanDashboard />
      ) : (
        <div
          className="d-flex vh-100"
          style={{
            position: "relative",
            overflowX: "hidden",
            overflowY: "hidden",
            height: "100vh",
            width: "100vw",
            margin: 0,
            backgroundColor: "transparent",
          }}
        >
          {/* Lingkaran di latar belakang */}
          <div style={circle1Style}></div>
          <div style={circle2Style}></div>
          <div style={circle3Style}></div>

          {/* Bagian Kiri: Form Login */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flex: 1 }}
          >
            <Login setAuthenticated={setAuthenticated} onLogin={handleLogin} />
          </div>

          {/* Bagian Tengah: Dua Garis */}
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ ...lineStyle, marginRight: "2px" }}></div>
            <div style={{ ...lineStyle, marginLeft: "2px" }}></div>
          </div>

          {/* Bagian Kanan: Gambar dan Teks */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "column",
              textAlign: "center",
              gap: "20px",
            }}
          >
            <img
              src={sampleImage}
              alt="Deskripsi Gambar"
              style={{
                maxWidth: "30%",
                maxHeight: "50vh",
                objectFit: "contain",
                backgroundColor: "transparent",
                display: "block",
              }}
            />
            <div
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#0000FF",
                fontFamily: "Playfair Display, serif",
              }}
            >
              Selamat Datang di Halaman Admin Wan Steak Corner!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HalamanLogin;
