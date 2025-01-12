// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faFacebook,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// import Logo from "../../assets/image/LogoWansteak.png"; // Sesuaikan path dengan lokasi file logo Anda

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#4D2C20",
//         color: "#f8f9fa",
//         padding: "10px 20px",
//       }}
//     >
//       <Container>
//         {/* Ikon Media Sosial di bagian atas */}
//         <Row style={{ marginTop: "20px", justifyContent: "center" }}>
//           <Col xs="auto">
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: "15px",
//               }}
//             >
//               <a
//                 href="https://www.instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ color: "#ffc107", fontSize: "1.5rem" }}
//               >
//                 <FontAwesomeIcon icon={faInstagram} />
//               </a>
//               <a
//                 href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ color: "#ffc107", fontSize: "1.5rem" }}
//               >
//                 <FontAwesomeIcon icon={faFacebook} />
//               </a>
//               <a
//                 href="https://wa.me/6281234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ color: "#ffc107", fontSize: "1.5rem" }}
//               >
//                 <FontAwesomeIcon icon={faWhatsapp} />
//               </a>
//             </div>
//           </Col>
//         </Row>

//         <Row>
//           {/* Informasi Umum dengan Logo */}
//           <Col
//             xs={12}
//             md={4}
//             style={{
//               display: "flex",
//               alignItems: "flex-start",
//               flexDirection: "column",
//               marginBottom: "20px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={Logo}
//                 alt="SteakHouse Logo"
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   marginRight: "15px",
//                   borderRadius: "50%",
//                   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
//                 }}
//               />
//               <div>
//                 <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>
//                   Wan Steak Corner
//                 </h5>
//                 <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
//                   Nikmati steak terbaik dengan cita rasa premium dan harga ramah
//                   kantong. Kami hadir untuk semua kalangan.
//                 </p>
//               </div>
//             </div>
//           </Col>

//           {/* Tentang Kami, Details, & Lokasi */}
//           <Col xs={12} md={8}>
//             <Row>
//               <Col xs={4} md={4} style={{ marginBottom: "10px" }}>
//                 <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>
//                   Tentang Kami
//                 </h5>
//                 <ul
//                   style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}
//                 >
//                   <li style={{ marginBottom: "10px" }}>
//                     <a
//                       href="/tentang-kami"
//                       style={{ color: "#f8f9fa", textDecoration: "none" }}
//                     >
//                       Visi & Misi
//                     </a>
//                   </li>
//                   <li style={{ marginBottom: "10px" }}>
//                     <a
//                       href="/tim-kami"
//                       style={{ color: "#f8f9fa", textDecoration: "none" }}
//                     >
//                       Tim Kami
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/karir"
//                       style={{ color: "#f8f9fa", textDecoration: "none" }}
//                     >
//                       Karir
//                     </a>
//                   </li>
//                 </ul>
//               </Col>

//               <Col xs={4} md={4} style={{ marginBottom: "10px" }}>
//                 <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>
//                   Details
//                 </h5>
//                 <ul
//                   style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}
//                 >
//                   <li style={{ marginBottom: "10px" }}>
//                     <a
//                       href="/menu"
//                       style={{ color: "#f8f9fa", textDecoration: "none" }}
//                     >
//                       Menu
//                     </a>
//                   </li>
//                   <li style={{ marginBottom: "10px" }}>
//                     <a
//                       href="/reservasi"
//                       style={{ color: "#f8f9fa", textDecoration: "none" }}
//                     >
//                       Pemesanan
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/kontak"
//                       style={{ color: "#f8f9fa", textDecoration: "none" }}
//                     >
//                       Hubungi Kami
//                     </a>
//                   </li>
//                 </ul>
//               </Col>

//               <Col xs={4} md={4} style={{ marginBottom: "10px" }}>
//                 <h5 style={{ fontWeight: "bold", marginBottom: "15px" }}>
//                   Lokasi
//                 </h5>
//                 <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
//                   Jl. Raya Steak No. 123, Jakarta Selatan
//                 </p>
//                 <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
//                   Tel: (021) 123-4567
//                 </p>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <p
//               style={{
//                 textAlign: "center",
//                 marginTop: "25px",
//                 fontSize: "0.85rem",
//                 color: "#868e96",
//               }}
//             >
//               &copy; {new Date().getFullYear()} Wan Steak Corner. All rights
//               reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/image/LogoWansteak.png"; // Sesuaikan path dengan lokasi file logo Anda

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4D2C20",
        color: "#f8f9fa",
        padding: "10px 20px",
      }}
    >
      <Container>
        {/* Ikon Media Sosial di bagian atas */}
        <Row style={{ marginTop: "20px", justifyContent: "center" }}>
          <Col xs="auto">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffc107", fontSize: "1.5rem" }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffc107", fontSize: "1.5rem" }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffc107", fontSize: "1.5rem" }}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Informasi Umum dengan Logo */}
          <Col
            xs={12}
            md={4}
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Logo}
                alt="SteakHouse Logo"
                style={{
                  width: "60px",
                  height: "60px",
                  marginRight: "15px",
                  borderRadius: "50%",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              />
              <div>
                <h5
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontFamily: "Libre Caslon Text, serif",
                  }}
                >
                  Wan Steak Corner
                </h5>
                <p
                  style={{
                    fontSize: "16px",

                    fontFamily: "Rasa, serif",
                  }}
                >
                  Nikmati steak terbaik dengan cita rasa premium dan harga ramah
                  kantong. Kami hadir untuk semua kalangan.
                </p>
              </div>
            </div>
          </Col>

          {/* Tentang Kami, Details, & Lokasi */}
          <Col xs={12} md={8}>
            <Row>
              <Col xs={4} md={4} style={{ marginBottom: "10px" }}>
                <h5
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    fontFamily: "Libre Caslon Text, serif",
                  }}
                >
                  Informasi
                </h5>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "16px" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <a
                      href="/tentangkami"
                      style={{
                        color: "#f8f9fa",
                        textDecoration: "none",
                        fontFamily: "Rasa, serif",
                        fontSize: "16px",
                      }}
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a
                      href="/kontak"
                      style={{
                        color: "#f8f9fa",
                        textDecoration: "none",
                        fontFamily: "Rasa, serif",
                        fontSize: "16px",
                      }}
                    >
                      Hubungi Kami
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={4} md={4} style={{ marginBottom: "10px" }}>
                <h5
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    fontFamily: "Libre Caslon Text, serif",
                  }}
                >
                  Details
                </h5>
                <ul
                  style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    <a
                      href="/pemesanan"
                      style={{
                        color: "#f8f9fa",
                        textDecoration: "none",
                        fontFamily: "Rasa, serif",
                        fontSize: "16px",
                      }}
                    >
                      Pemesanan
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={4} md={4} style={{ marginBottom: "10px" }}>
                <h5
                  style={{
                    fontWeight: "bold",
                    marginBottom: "15px",
                    fontFamily: "Libre Caslon Text, serif",
                  }}
                >
                  Lokasi
                </h5>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                  Jl. Raya Steak No. 123, Jakarta Selatan
                </p>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                  Tel: (021) 123-4567
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Garis Horizontal di atas copyright */}
        <Row>
          <Col>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #f8f9fa", // Warna putih
                margin: "20px 0", // Jarak atas-bawah
              }}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "0.85rem",
                color: "#868e96",
              }}
            >
              &copy; {new Date().getFullYear()} Wan Steak Corner. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
