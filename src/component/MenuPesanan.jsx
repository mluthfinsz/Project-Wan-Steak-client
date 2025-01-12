// src/component/ComponentUser/MenuPesanan.jsx
import React from "react";
import MenuItem from "./MenuItem";
import { Container, Row, Col } from "react-bootstrap";

const menuData = [
  {
    id: 1,
    name: "Nasi Goreng",
    description: "Nasi goreng dengan ayam, telur, dan sayuran segar.",
    rating: 4.5,
    price: 20000,
  },
  {
    id: 2,
    name: "Mie Ayam",
    description: "Mie ayam dengan daging ayam dan sayuran.",
    rating: 4.2,
    price: 18000,
  },
  {
    id: 3,
    name: "Ayam Geprek",
    description: "Ayam goreng dengan sambal pedas khas.",
    rating: 4.8,
    price: 25000,
  },
];

const MenuPesanan = () => {
  return (
    <Container fluid style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Menu</h2>
      <Row>
        {menuData.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4}>
            <MenuItem item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPesanan;
