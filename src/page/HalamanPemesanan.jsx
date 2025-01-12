import React from "react";
import Navbar from "../component/ComponentUser/NavbarUser";
import UserMenu from "../component/ComponentUser/MenuUser";
import Informasi from "../component/ComponentUser/Harga";
import SemuaMenu from "../component/ComponentUser/Menu";
import Footer from "../component/ComponentUser/Footer";

const MenuPemesan = () => {
  return (
    <div>
      <Navbar />
      <Informasi />
      <SemuaMenu />
      <UserMenu />
      <Footer />
    </div>
  );
};

export default MenuPemesan;
