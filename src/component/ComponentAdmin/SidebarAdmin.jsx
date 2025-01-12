// // export default Sidebar;
// import React from "react";
// import logo from "../../assets/image/Logowan.png"; // Gantilah dengan path logo yang sesuai
// import dashboardIcon from "../../assets/image/ihome.png";
// import pesananIcon from "../../assets/image/ipesanan.png";
// import produkIcon from "../../assets/image/iproduk.png";
// import ulasanIcon from "../../assets/image/iulasan.png";
// import adminIcon from "../../assets/image/iadmin.png";

// const Sidebar = ({ setAuthenticated }) => {
//   const sidebarStyle = {
//     width: "200px",
//     backgroundColor: "rgba(246, 246, 246, 0.3)", // Transparan dengan 80% opacity
//     color: "#000", // Menggunakan warna teks hitam
//     minHeight: "100%",
//     display: "flex",
//     flexDirection: "column",
//     padding: "16px",
//     fontFamily: "Lora, serif",
//     fontSize: "14px",
//   };

//   const logoStyle = {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "16px", // Memberikan jarak antara logo dan menu
//   };

//   const linkStyle = {
//     textDecoration: "none",
//     color: "#000",
//     marginBottom: "10px",
//     padding: "8px",
//     borderRadius: "4px",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px", // Jarak antara ikon dan teks
//   };

//   const linkHoverStyle = {
//     backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparan saat hover dengan 60% opacity
//     color: "#fff",
//   };

//   return (
//     <div style={sidebarStyle}>
//       <div style={logoStyle}>
//         <img
//           src={logo}
//           alt="Logo"
//           style={{
//             width: "50px",
//             height: "auto",
//           }}
//         />
//       </div>
//       <a
//         href="/dashboard"
//         style={linkStyle}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
//         }
//         onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
//       >
//         <img
//           src={dashboardIcon}
//           alt="Dashboard"
//           style={{ width: "20px", height: "20px" }}
//         />
//         Dashboard
//       </a>
//       <a
//         href="/pesanan"
//         style={linkStyle}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
//         }
//         onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
//       >
//         <img
//           src={pesananIcon}
//           alt="Pesanan"
//           style={{ width: "20px", height: "20px" }}
//         />
//         Pesanan
//       </a>
//       <a
//         href="/produk"
//         style={linkStyle}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
//         }
//         onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
//       >
//         <img
//           src={produkIcon}
//           alt="Produk"
//           style={{ width: "20px", height: "20px" }}
//         />
//         Produk
//       </a>
//       <a
//         href="/ulasanadmin"
//         style={linkStyle}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
//         }
//         onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
//       >
//         <img
//           src={ulasanIcon}
//           alt="Ulasan"
//           style={{ width: "20px", height: "20px" }}
//         />
//         Ulasan
//       </a>
//       <hr style={{ margin: "20px 0", border: "0.5px solid #ddd" }} />
//       <a
//         href="/page"
//         style={linkStyle}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
//         }
//         onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
//       >
//         <img
//           src={adminIcon}
//           alt="Admin"
//           style={{ width: "20px", height: "20px" }}
//         />
//         Admin
//       </a>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import logo from "../../assets/image/Logowan.png"; // Gantilah dengan path logo yang sesuai
import dashboardIcon from "../../assets/image/ihome.png";
import pesananIcon from "../../assets/image/ipesanan.png";
import produkIcon from "../../assets/image/iproduk.png";
import ulasanIcon from "../../assets/image/iulasan.png";
import adminIcon from "../../assets/image/iadmin.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const sidebarStyle = {
    width: "200px",
    backgroundColor: "rgba(246, 246, 246, 0.3)", // Transparan dengan 80% opacity
    color: "#000", // Menggunakan warna teks hitam
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    fontFamily: "Lora, serif",
    fontSize: "14px",
  };

  const logoStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px", // Memberikan jarak antara logo dan menu
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    gap: "8px", // Jarak antara ikon dan teks
  };

  const linkHoverStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparan saat hover dengan 60% opacity
    color: "#fff",
  };

  // Fungsi logout untuk menghapus status autentikasi
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/page");
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "50px",
            height: "auto",
          }}
        />
      </div>
      <a
        href="/dashboard"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        <img
          src={dashboardIcon}
          alt="Dashboard"
          style={{ width: "20px", height: "20px" }}
        />
        Dashboard
      </a>
      <a
        href="/pesanan"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        <img
          src={pesananIcon}
          alt="Pesanan"
          style={{ width: "20px", height: "20px" }}
        />
        Pesanan
      </a>
      <a
        href="/produk"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        <img
          src={produkIcon}
          alt="Produk"
          style={{ width: "20px", height: "20px" }}
        />
        Produk
      </a>
      <a
        href="/ulasanadmin"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        <img
          src={ulasanIcon}
          alt="Ulasan"
          style={{ width: "20px", height: "20px" }}
        />
        Ulasan
      </a>
      <hr style={{ margin: "20px 0", border: "0.5px solid #ddd" }} />
      <a
        href="/page"
        style={linkStyle}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)
        }
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onClick={(e) => {
          e.preventDefault(); // Mencegah pengalihan ke /page
          handleLogout(); // Memanggil fungsi logout
        }}
      >
        <img
          src={adminIcon}
          alt="Admin"
          style={{ width: "20px", height: "20px" }}
        />
        Admin
      </a>
    </div>
  );
};

export default Sidebar;
