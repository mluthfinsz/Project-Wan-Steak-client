import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../component/ComponentAdmin/Login"; // Ensure the path is correct
import Navbar from "../component/ComponentUser/NavbarUser";
import sampleImage from "../assets/image/LogoWansteak.png"; // Ensure the path is correct

const MenuPemesan = () => {
  const lineStyle = {
    width: "2px",
    height: "80vh", // Adjust height to be shorter, not touching top and bottom
    backgroundColor: "#0000FF",
    marginTop: "20vh", // Push the line down to center it vertically
    marginBottom: "20vh", // Add space at the bottom
  };

  // Styles for circles in the background
  const circleStyle = {
    position: "absolute",
    width: "100px",
    height: "300px",
    background: "linear-gradient(50deg, #00FFFF, #0000FF)",
    borderRadius: "50%",
    filter: "blur(95px)",
    zIndex: -1, // Ensures it stays in the background
  };

  const circle1Style = {
    ...circleStyle,
    top: "-25%",
    left: "15%",
    animation: "circleAnimation 3s infinite ease-in-out", // Animation for color change
  };

  const circle2Style = {
    ...circleStyle,
    top: "97%",
    right: "10%",
    animation: "circleAnimation 3s infinite ease-in-out",
    animationDelay: "0.5s", // Stagger the animation delay
  };

  const circle3Style = {
    ...circleStyle,
    top: "40%",
    left: "-10%",
    animation: "circleAnimation 3s infinite ease-in-out",
    animationDelay: "1s", // Stagger the animation delay further
  };

  return (
    <div
      className="d-flex vh-100"
      style={{
        position: "relative",
        overflowX: "hidden", // Prevent horizontal scroll
        overflowY: "hidden", // Prevent vertical scroll
        height: "100vh", // Ensure the container takes full viewport height
        width: "100vw", // Ensure it takes full viewport width
        margin: 0, // Remove any default margin
        backgroundColor: "transparent", // Ensure no background color on the container
      }}
    >
      {/* Circles in the background */}
      <div style={circle1Style}></div>
      <div style={circle2Style}></div>
      <div style={circle3Style}></div>

      {/* Left Section: Login Form */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flex: 1 }}
      >
        <Login />
      </div>

      {/* Center Section: Two Lines */}
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ ...lineStyle, marginRight: "2px" }}></div>
        <div style={{ ...lineStyle, marginLeft: "2px" }}></div>
      </div>

      {/* Right Section: Image and Text */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          flex: 1,
          backgroundColor: "transparent", // Ensure the container has no background
          flexDirection: "column", // Arrange items vertically
          textAlign: "center", // Center-align text and image
          gap: "20px", // Add space between image and text
        }}
      >
        {/* Image */}
        <img
          src={sampleImage}
          alt="Deskripsi Gambar"
          style={{
            maxWidth: "30%", // Adjust the size of the image
            maxHeight: "50vh",
            objectFit: "contain",
            backgroundColor: "transparent", // Ensures the image background is transparent
            display: "block", // Ensures no inline display that might cause issues
          }}
        />
        {/* Text */}
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
  );
};

export default MenuPemesan;

