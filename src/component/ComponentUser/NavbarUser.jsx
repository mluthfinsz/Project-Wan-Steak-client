import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion dari framer-motion
import logo from "../../assets/image/LogoWan.png"; // Sesuaikan path logo sesuai folder Anda

const CustomNavbar = () => {
  const location = useLocation(); // Mendapatkan informasi rute saat ini

  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      style={{
        backgroundColor: "#ffffff",
        padding: "10px 20px",
        fontFamily: "Bitter, serif",
        fontSize: "14px",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "auto", // Agar proporsional
              objectFit: "contain", // Hindari potongan logo
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Menu tengah */}
          <Nav className="mx-auto">
            {["Beranda", "Tentang Kami", "Pemesanan", "Ulasan"].map(
              (menu, idx) => {
                const routePath = `/${menu.toLowerCase().replace(/\s+/g, "")}`;
                const isActive =
                  location.pathname === routePath ||
                  (menu === "Beranda" && location.pathname === "/");

                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 1 }} // Awal skala normal
                    animate={{ scale: isActive ? 1.1 : 1 }} // Skala 1.1 jika aktif, 1 jika tidak
                    transition={{ duration: 0.5 }} // Durasi animasi 0.5 detik
                  >
                    <Nav.Link
                      as={Link}
                      to={routePath}
                      style={{
                        margin: "0 10px",
                        padding: "10px 20px",
                        backgroundColor: isActive ? "#FFA500" : "#FFF9F9", // Warna oranye jika aktif
                        color: isActive ? "white" : "black", // Warna teks menyesuaikan
                        borderRadius: "20px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "block",
                        width: "150px",
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease", // Tambahkan transisi halus
                      }}
                    >
                      {menu}
                    </Nav.Link>
                  </motion.div>
                );
              }
            )}
          </Nav>

          {/* Button Contact di kanan */}
          <Button
            as={Link}
            to="/kontak"
            style={{
              backgroundColor: "#344A1F",
              border: "none",
              fontSize: "14px",
              width: "130px",
              padding: "8px 20px",
              borderRadius: "20px",
              transition: "background-color 0.3s ease, transform 0.3s ease", // Transisi untuk warna dan transformasi
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#344A1F"; // Warna saat hover
              e.target.style.transform = "scale(1.05)"; // Efek zoom saat hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#344A1F"; // Warna asli
              e.target.style.transform = "scale(1)"; // Kembali ke ukuran semula
            }}
          >
            Contact
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
