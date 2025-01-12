import React from "react";
import Navbar from "../component/ComponentUser/NavbarUser";
import Hero from "../component/ComponentUser/Hero";
import Icon from "../component/ComponentUser/Service";
import Sajian from "../component/ComponentUser/Deskripsi";
import Favorit from "../component/ComponentUser/MenuFavorite";
import Footer from "../component/ComponentUser/Footer";
import CardUlasan from "../component/ComponentUser/CardUlasan";


const Beranda = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Icon />
      <Sajian />
      <Favorit />
      <CardUlasan />
      <Footer />
     
    </div>
  );
};

export default Beranda;
