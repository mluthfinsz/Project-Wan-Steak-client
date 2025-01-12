import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const formStyle = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
  };

  const inputStyle = {
    marginBottom: "20px",
    fontSize: "12px",
    fontFamily: "Lora, serif",
  };

  const labelStyle = {
    marginBottom: "10px",
    display: "block",
    fontFamily: "Lora, serif",
    fontSize: "18px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "blue",
    borderColor: "#FF8C00",
    color: "white",
    padding: "12px",
    borderRadius: "5px",
    fontFamily: "Lora, serif",
  };

  const containerStyle = {
    padding: "10px",
  };

  const linkStyle = {
    display: "block",
    marginTop: "10px",
    textAlign: "right",
    textDecoration: "none",
    color: "#0000FF",
    fontFamily: "Lora, serif",
  };

  // Style for <h1>
  const h1Style = {
    textAlign: "center",
    fontFamily: "Playfair Display, serif",
    fontSize: "2.5rem", // Adjust font size
    fontWeight: "bold",
    color: "#0000FF",
    marginBottom: "20px",
  };

  // Style for <p>
  const pStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "black",
    fontWeight: "normal",
    marginBottom: "20px",
    fontFamily: "Lora, serif",
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div style={formStyle}>
            <h1 style={h1Style}>Login</h1>
            <p style={pStyle}>Silahkan masukkan username dan password !</p>
            <form>
              <div className="form-group" style={inputStyle}>
                <label htmlFor="email" style={labelStyle}>
                  Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukkan Username"
                />
              </div>
              <div className="form-group" style={inputStyle}>
                <label htmlFor="password" style={labelStyle}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <a href="#" style={linkStyle}>
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={buttonStyle}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
