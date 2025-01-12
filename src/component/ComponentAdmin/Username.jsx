

import React, { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import "./responsif.css"; // Pastikan path file CSS sesuai

const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName] = useState("admin"); // Nama pengguna yang akan ditampilkan, misalnya "admin"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "260px",
        width: "calc(165vh - 100px)", // Lebar kecil saat sidebar ditutup
        height: "50px",
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        transition: "width 0.3s ease",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        {/* User Icon and Name */}
        <div className="d-flex align-items-center">
          <FaUser
            onClick={toggleMenu}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "10px",
              transform: "translateY(-5px)", // Naikkan ikon sedikit
            }}
          />
          <span
            style={{
              transform: "translateY(-5px)", // Naikkan teks sedikit
            }}
          >
            {userName}
          </span>
        </div>
      </div>

      {/* Dropdown Menu for Profile (ditempatkan di luar rectangle) */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px", // Menampilkan dropdown tepat di bawah ikon user
            left: "260px", // Sesuaikan agar dropdown muncul di bawah rectangle
            backgroundColor: "#fff",
            color: "#333",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            width: "150px", // Sesuaikan lebar dropdown
          }}
        >
          <ul className="list-unstyled" style={{ margin: 0, padding: 0 }}>
            <li>
              <Link to="/profile" style={{ textDecoration: "none", color: "#333" }}>
                <FaUser /> Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" style={{ textDecoration: "none", color: "#333" }}>
                <FaCog /> Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" style={{ textDecoration: "none", color: "#333" }}>
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default User;
