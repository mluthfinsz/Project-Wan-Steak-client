import React, { useState } from "react";
import Navbar from "../component/ComponentUser/NavbarUser";
import Ulasan from "../component/ComponentUser/Ulasan";

import Footer from "../component/ComponentUser/Footer";

const HalamanUlasan = () => {
  return (
    <div>
      <Navbar />
      <Ulasan />
      <Footer />
    </div>
  );
};

export default HalamanUlasan;
