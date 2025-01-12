import React from "react";
import cardImage1 from "../../assets/image/Steak1.png"; // Ganti dengan path gambar Anda
import cardImage2 from "../../assets/image/Steak2.png"; // Ganti dengan path gambar Anda
import cardImage3 from "../../assets/image/Steak3.png"; // Ganti dengan path gambar Anda

const BackgroundSection = () => {
  const containerStyle = {
    position: "relative",
    height: "70vh",
    backgroundColor: "#344A1F",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const triangleStyle = {
    position: "absolute",
    width: "60px",
    height: "60px",
    backgroundColor: "white",
    transform: "rotate(45deg)",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
  };

  const leftTriangleStyle = {
    ...triangleStyle,
    top: "50%",
    left: "-30px",
    transform: "translateY(-50%) rotate(45deg)",
  };

  const rightTriangleStyle = {
    ...triangleStyle,
    top: "50%",
    right: "-30px",
    transform: "translateY(-50%) rotate(45deg)",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    maxWidth: "1200px",
    width: "100%",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 26px 10px rgba(0, 0, 0, 0.15)",
    width: "300px", // Lebar kartu diperbesar
    padding: "20px",
    textAlign: "center",
    margin: "10px",
  };

  const imageStyle = {
    width: "80%",
    height: "auto",
    objectFit: "cover",
    marginBottom: "10px",
    boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.0)", // Efek drop shadow
    borderRadius: "5px", // Opsional: tambahkan rounded corners pada gambar
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "bold",
          color: "black",
          marginBottom: "20px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Menu Favorite
      </h1>

      <div style={containerStyle}>
        <div style={leftTriangleStyle}></div>
        <div style={rightTriangleStyle}></div>

        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <img src={cardImage1} alt="Card 1" style={imageStyle} />
            <h4
              style={{
                marginTop: "10px",
                color: "black",
                fontFamily: "Rasa, serif",
                fontSize: "24px",
              }}
            >
              Original Barbeque
            </h4>
            <p style={{ color: "black", fontFamily: "Joan, serif" }}>
              "Rasa gurih dan manis Original Barbeque ga pernah salah!"
            </p>
          </div>

          <div style={cardStyle}>
            <img src={cardImage2} alt="Card 2" style={imageStyle} />
            <h4
              style={{
                marginTop: "10px",
                color: "black",
                fontFamily: "Rasa, serif",
                fontSize: "24px",
              }}
            >
              Blackpaper
            </h4>
            <p style={{ color: "black", fontFamily: "Joan, serif" }}>
              "Saus yang ini buat kamu yang lagi pengen rasa gurih dan pedes
              tipis yang bikin anget mulut!"
            </p>
          </div>

          <div style={cardStyle}>
            <img
              src={cardImage3}
              alt="Card 3"
              style={{
                ...imageStyle,
                width: "67%", // Lebar khusus untuk gambar ketiga
              }}
            />
            <h4
              style={{
                marginTop: "10px",
                color: "black",
                fontFamily: "Rasa, serif",
                fontSize: "24px",
              }}
            >
              Creamy Mushroom
            </h4>
            <p style={{ color: "black", fontFamily: "Joan, serif" }}>
              "Saus jamur khas Wan Steak Corner ini wajib dicoba buat kamu yang
              suka rasa creamy nan gurih!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
