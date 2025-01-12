import React from "react";
import Navbar from "../component/ComponentUser/NavbarUser";
import Background from "../component/ComponentUser/AboutBg";
import Steak from "../component/ComponentUser/AboutSteak";
import Cerita from "../component/ComponentUser/Cerita";
import Berita from "../component/ComponentUser/UtamaBerita";
import Maps from "../component/ComponentUser/Maps";
import Footer from "../component/ComponentUser/Footer";

const TentangKami = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Steak />
      <Cerita />
      <Berita />
      <Maps />
      <Footer />
    </div>
  );
};

export default TentangKami;
