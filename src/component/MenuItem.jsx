// src/component/ComponentUser/MenuItem.jsx
import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const addToOrder = () => {
    alert(`Pesanan ${item.name} sebanyak ${quantity} ditambahkan ke keranjang!`);
  };

  return (
    <Card style={{ marginBottom: "20px", padding: "10px", textAlign: "center" }}>
      <Card.Img
        variant="top"
        src={`https://via.placeholder.com/150`} // Gambar sementara
        alt={item.name}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <div style={{ marginBottom: "10px" }}>
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              color={index < Math.round(item.rating) ? "#FFD700" : "#E4E5E9"}
            />
          ))}
          <span style={{ marginLeft: "8px", fontSize: "0.9em" }}>
            ({item.rating})
          </span>
        </div>
        <p>Harga: Rp {item.price}</p>
        <Form.Group controlId="quantity" style={{ marginBottom: "10px" }}>
          <Form.Label>Kuantitas:</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            style={{ textAlign: "center" }}
          />
        </Form.Group>
        <Button onClick={addToOrder} variant="primary">
          Tambah ke Pesanan
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
