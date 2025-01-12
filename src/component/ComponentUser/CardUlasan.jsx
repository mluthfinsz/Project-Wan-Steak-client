// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Carousel, Card, Col, Row } from "react-bootstrap";

// const CardUlasan = () => {
//   const [ulasan, setUlasan] = useState([]);

//   // Mengambil ulasan dari API
//   const fetchUlasan = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/ulasan");
//       setUlasan(response.data);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   // Menarik ulasan saat komponen pertama kali dimuat
//   useEffect(() => {
//     fetchUlasan();
//   }, []);

//   // Membagi ulasan menjadi grup yang berisi 3 ulasan per slide
//   const chunkedUlasan = [];
//   for (let i = 0; i < ulasan.length; i += 3) {
//     chunkedUlasan.push(ulasan.slice(i, i + 3));
//   }

//   return (
//     <div className="container mt-5">
//       <h3>Ulasan Pengguna</h3>
//       <Carousel interval={5000}>
//         {chunkedUlasan.map((chunk, index) => (
//           <Carousel.Item key={index}>
//             <Row className="d-flex justify-content-center">
//               {chunk.map((review) => (
//                 <Col key={review.id} xs={12} md={4} className="mb-4">
//                   <Card style={{ width: "100%" }}>
//                     <Card.Body>
//                       <Card.Title>{review.nama}</Card.Title>
//                       <Card.Text>{review.deskripsi}</Card.Text>
//                       <Card.Footer>
//                         <small className="text-muted">
//                           {/* Menampilkan bintang berdasarkan rating */}
//                           {"★".repeat(review.rating)}
//                         </small>
//                       </Card.Footer>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CardUlasan;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Card, Col, Row } from "react-bootstrap";
import defaultProfileImage from "../../assets/image/icon.png"; // Tambahkan gambar default di folder assets

const CardUlasan = () => {
  const [ulasan, setUlasan] = useState([]);

  // Fungsi untuk mengambil ulasan dari API
  const fetchUlasan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/ulasan");
      setUlasan(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Menarik ulasan setiap 5 detik (polling)
  useEffect(() => {
    fetchUlasan(); // Ambil data saat komponen pertama kali dimuat
    const intervalId = setInterval(fetchUlasan, 5000); // Polling setiap 5 detik

    // Hentikan polling saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  // Membagi ulasan menjadi grup yang berisi 3 ulasan per slide
  const chunkedUlasan = [];
  for (let i = 0; i < ulasan.length; i += 3) {
    chunkedUlasan.push(ulasan.slice(i, i + 3));
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "50px 0",
        marginBottom: "50px",
      }}
    >
      <div className="container mt-5">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              color: "black",
              fontFamily: "Playfair Display, serif",
            }}
          >
            Ulasan
          </h1>
          <h3
            style={{
              fontSize: "28px",
              color: "black",
              fontFamily: "Rasa, serif",
              marginTop: "10px",
              marginBottom: "50px",
            }}
          >
            Apa kata mereka tentang kami?
          </h3>
        </div>

        {/* Carousel Section */}
        <Carousel interval={5000}>
          {chunkedUlasan.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="d-flex justify-content-center">
                {chunk.map((review) => (
                  <Col
                    key={review.id}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    className="mb-4"
                  >
                    <Card
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      <Card.Body>
                        <Row
                          className="d-flex align-items-center"
                          style={{ gap: "0px" }}
                        >
                          <Col xs="auto">
                            <img
                              src={defaultProfileImage}
                              alt="Profile"
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Title
                              style={{
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                                color: "#333",
                                marginBottom: "10px",
                              }}
                            >
                              {review.nama}
                            </Card.Title>
                          </Col>
                        </Row>
                        <Card.Text
                          style={{
                            fontSize: "1rem",
                            color: "#555",
                            marginBottom: "10px",
                          }}
                        >
                          {review.deskripsi}
                        </Card.Text>
                        <Card.Footer
                          style={{
                            backgroundColor: "transparent",
                            borderTop: "1px solid #eee",
                            textAlign: "right",
                          }}
                        >
                          <small
                            className="text-muted"
                            style={{ color: "#888" }}
                          >
                            {"★".repeat(review.rating)}
                          </small>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardUlasan;
