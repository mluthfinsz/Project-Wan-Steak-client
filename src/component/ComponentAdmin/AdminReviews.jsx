import React from "react";

const AdminReviews = ({ reviews, onDelete }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Kelola Ulasan</h2>
      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>
            <h4>{review.name}</h4>
            <p>{review.content}</p>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
          </div>
          <button
            onClick={() => onDelete(review.id)}
            style={{
              padding: "8px",
              backgroundColor: "#e74c3c",
              color: "#fff",
            }}
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminReviews;
