// ReviewCarousel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ReviewCarousel = ({ reviews }) => {
  return (
    <Carousel style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      {reviews.map((review, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>{review.name}</h4>
            <div style={{ color: "#ffc107", marginBottom: "10px" }}>
              {"★".repeat(review.rating)}
              {"★".repeat(5 - review.rating).replace(/\u2605/g, "\u2606")}
            </div>
            <p>{review.description}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
