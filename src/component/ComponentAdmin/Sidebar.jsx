import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FaTachometerAlt, FaBox, FaShoppingCart, FaCog } from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50px",
        width: isOpen ? "200px" : "80px",
        height: "calc(100vh - 40px)",
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        overflowY: "auto",
        transition: "width 0.3s ease",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <button
        onClick={toggleSidebar}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        {isOpen ? "←" : "→"}
      </button>

      <h2
        style={{
          display: isOpen ? "block" : "none",
          padding: "0 10px",
          marginBottom: "20px",
          fontSize: "1.5rem",
        }}
      >
        Admin Panel
      </h2>

      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/dashboard"
            style={{
              color: "white",
              padding: "10px",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <FaTachometerAlt style={{ marginRight: isOpen ? "10px" : "0" }} />
            {isOpen && "Dashboard"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/produk"
            style={{
              color: "white",
              padding: "10px",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <FaBox style={{ marginRight: isOpen ? "10px" : "0" }} />
            {isOpen && "Produk"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/pemesanan"
            style={{
              color: "white",
              padding: "10px",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <FaShoppingCart style={{ marginRight: isOpen ? "10px" : "0" }} />
            {isOpen && "Pemesanan"}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/admin/setting"
            style={{
              color: "white",
              padding: "10px",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <FaCog style={{ marginRight: isOpen ? "10px" : "0" }} />
            {isOpen && "Setting"}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
