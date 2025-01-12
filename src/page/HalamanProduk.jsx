import React from "react";
// import Sidebar from "../component/ComponentAdmin/Sidebar";
// import Produk from "../component/ComponentAdmin/AddMenuForm";
// import Username from "../component/ComponentAdmin/Username";
import MenuAdmin from "../component/ComponentAdmin/Menu";



const dashboard = () => {
  // Bulatan blur
  const circleStyle = {
    position: "absolute",
    width: "100px",
    height: "300px",
    background: "linear-gradient(50deg, #00FFFF, #0000FF)",
    borderRadius: "50%",
    filter: "blur(95px)",
    zIndex: -1,
  };

  // Posisi bulatan
  const circle1Style = {
    ...circleStyle,
    top: "-25%", // Sama dengan MenuPemesan
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

  // Container Utama
  const containerStyle = {
    position: "relative",

    height: "100vh",
    overflow: "hidden",
    margin: 0,
    backgroundColor: "transprent", // Sama seperti MenuPemesan
  };

  return (
    <div style={containerStyle}>
      {/* Background Bulatan */}
      <div style={circle1Style}></div>
      <div style={circle2Style}></div>
      <div style={circle3Style}></div>

      {/* Content */}

      <MenuAdmin />
    </div>
  );
};

export default dashboard;
