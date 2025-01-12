import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image/Logowan.png"; // Impor logo dari folder (ubah path sesuai dengan lokasi logo Anda)

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate("/route");
    }, 3000); // Tampilkan splash screen selama 3 detik
  }, [navigate]);

  const splashStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white", // Latar belakang tetap putih
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  };

  const textStyle = {
    background: "black", // Gradasi dari kuning ke merah untuk teks
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "2.5rem",
    fontFamily: "Plaster, serif",
    zIndex: 2,
  };

  const circleContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  };

  const circleStyle = {
    position: "absolute",
    width: "300px",
    height: "300px",
    backgroundColor: "#344A1F", // Warna baru untuk lingkaran
    borderRadius: "50%",
    filter: "blur(150px)", // Efek blur yang lebih kuat
  };

  const circle1Style = {
    ...circleStyle,
    top: "-15%",
    left: "-5%",
  };

  const circle2Style = {
    ...circleStyle,
    top: "90%",
    right: "50%",
  };

  const circle3Style = {
    ...circleStyle,
    top: "80%",
    right: "0%",
  };

  const circle4Style = {
    ...circleStyle,
    top: "1%",
    left: "90%",
  };

  return (
    <>
      {isLoading && (
        <div style={splashStyle}>
          <div style={circleContainerStyle}>
            <div style={circle1Style}></div>
            <div style={circle2Style}></div>
            <div style={circle3Style}></div>
            <div style={circle4Style}></div>
          </div>
          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "150px", // Ukuran logo
                height: "auto",
                marginBottom: "20px", // Jarak antara logo dan teks
              }}
            />
            <h1 style={textStyle}>WAN STEAK CORNER</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
