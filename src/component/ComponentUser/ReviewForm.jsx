import React, { useState } from "react";

const ReviewForm = ({ onReviewSubmit }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ name, content, rating });
    setName("");
    setContent("");
    setRating(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>Isi Ulasan Anda</h3>
      <div style={{ marginBottom: "10px" }}>
        <label>Nama:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Ulasan:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        ></textarea>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" style={{ padding: "10px", width: "100%" }}>
        Kirim Ulasan
      </button>
    </form>
  );
};

export default ReviewForm;
