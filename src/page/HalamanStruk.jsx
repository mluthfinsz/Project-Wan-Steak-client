// import React from "react";
// import Struk from "../component/ComponentUser/Struk";

// const Menu = () => {
//   const namaPelanggan = "John Doe";
//   const meja = "4";
//   const items = [
//     { nama: "Steak Sirloin", harga: 85000 },
//     { nama: "Steak Tenderloin", harga: 95000 },
//     { nama: "Minuman Soda", harga: 15000 },
//   ];
//   const totalHarga = items.reduce((total, item) => total + item.harga, 0);
//   const tanggal = new Date().toLocaleDateString();

//   return (
//     <div>
//       <h1 style={{ textAlign: "center", marginTop: "20px" }}>Menu</h1>
//       <Struk
//         namaPelanggan={namaPelanggan}
//         meja={meja}
//         items={items}
//         totalHarga={totalHarga}
//         tanggal={tanggal}
//       />
//     </div>
//   );
// };

// export default Menu;
import React from "react";
import { useLocation } from "react-router-dom";
import Struk from "../component/ComponentUser/Struk";

const HalamanStruk = () => {
  const { state } = useLocation(); // Menerima data dari navigasi
  const { namaPelanggan, meja, items, totalHarga } = state || {};

  const tanggal = new Date().toLocaleDateString();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Struk</h1>
      <Struk
        namaPelanggan={namaPelanggan}
        meja={meja}
        items={items}
        totalHarga={totalHarga}
        tanggal={tanggal}
      />
    </div>
  );
};

export default HalamanStruk;
