import React from "react";

const CookingSteakAnimation = () => {
  const animationStyles = {
    container: {
      position: "relative",
      width: "300px",
      height: "400px",
      backgroundColor: "#f1f1f1",
      borderRadius: "15px",
      overflow: "hidden",
    },
    chef: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      width: "50px",
      height: "100px",
      backgroundColor: "#6b4f3a", // Warna pakaian chef
      borderRadius: "10px",
      animation: "chefMovement 2s infinite", // Animasi bergerak
    },
    steakPan: {
      position: "absolute",
      top: "50px",
      left: "50%",
      width: "120px",
      height: "20px",
      backgroundColor: "#333",
      borderRadius: "10px",
      transform: "translateX(-50%)",
    },
    steak: {
      position: "absolute",
      top: "5px",
      left: "50%",
      width: "40px",
      height: "10px",
      backgroundColor: "#9e5a3a", // Warna steak
      borderRadius: "5px",
      animation: "steakSizzle 2s infinite", // Steak berputar
    },
  };

  return (
    <div style={animationStyles.container}>
      <div style={animationStyles.chef}></div>
      <div style={animationStyles.steakPan}>
        <div style={animationStyles.steak}></div>
      </div>
    </div>
  );
};

export default CookingSteakAnimation;
