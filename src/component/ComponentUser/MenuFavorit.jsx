import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import image1 from "../../assets/image/menu1.jpg"; // Gambar pertama
import image2 from "../../assets/image/menu2.jpg"; // Gambar kedua
import image3 from "../../assets/image/menu3.jpg"; // Gambar ketiga

const FavoriteMenu = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "5vh 0",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2rem)", // Responsif
          marginBottom: "3vh",
        }}
      >
        Menu Favorit
      </h2>

      {/* Row untuk gambar menu */}
      <Row
        xs={1}
        sm={2}
        md={3}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem", // Kurangi jarak antar kolom
          flexWrap: "wrap", // Allow wrapping pada layar kecil
        }}
      >
        {/* Gambar Menu 1 */}
        <Col
          style={{
            flex: "1", // Ensure each column takes equal space
            padding: "0 1rem", // Tambahkan padding agar tidak menempel di sisi
          }}
        >
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img
              src={image1}
              alt="Steak"
              style={{
                width: "100%",
                height: "200px", // Set a fixed height for consistent image size
                objectFit: "cover", // Maintain aspect ratio and crop if needed
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h5
              style={{
                marginTop: "1rem",
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                color: "white",
              }}
            >
              Steak Lezat
            </h5>
            <p
              style={{
                color: "white",
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                marginTop: "0.5rem",
              }}
            >
              Nikmati steak dengan rasa yang kaya dan daging yang lembut.
            </p>
          </Card>
        </Col>

        {/* Gambar Menu 2 */}
        <Col
          style={{
            flex: "1", // Ensure each column takes equal space
            padding: "0 1rem", // Tambahkan padding agar tidak menempel di sisi
          }}
        >
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img
              src={image2}
              alt="Pasta"
              style={{
                width: "100%",
                height: "200px", // Set a fixed height for consistent image size
                objectFit: "cover", // Maintain aspect ratio and crop if needed
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h5
              style={{
                marginTop: "1rem",
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                color: "white",
              }}
            >
              Pasta Enak
            </h5>
            <p
              style={{
                color: "white",
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                marginTop: "0.5rem",
              }}
            >
              Pasta yang kenyal dengan saus yang lezat dan penuh rasa.
            </p>
          </Card>
        </Col>

        {/* Gambar Menu 3 */}
        <Col
          style={{
            flex: "1", // Ensure each column takes equal space
            padding: "0 1rem", // Tambahkan padding agar tidak menempel di sisi
          }}
        >
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img
              src={image3}
              alt="Salad"
              style={{
                width: "100%",
                height: "200px", // Set a fixed height for consistent image size
                objectFit: "cover", // Maintain aspect ratio and crop if needed
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h5
              style={{
                marginTop: "1rem",
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                color: "white",
              }}
            >
              Salad Segar
            </h5>
            <p
              style={{
                color: "white",
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                marginTop: "0.5rem",
              }}
            >
              Salad segar dengan sayuran pilihan dan dressing yang menyehatkan.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FavoriteMenu;
