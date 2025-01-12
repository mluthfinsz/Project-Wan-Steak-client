// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./component/PrivateRoute";

// import HalamanUtama from "./page/HalamanSplashscreen";
// import Routing from "./page/HalamanRoute";
// //HALAMAN USER

// // import HalamanAwal from "./page/HalamanAwal";
// import Beranda from "./page/HalamanBeranda";
// import TentangKami from "./page/HalamanTentangKami";
// import Pemesanan from "./page/HalamanPemesanan";
// import Ulasan from "./page/HalamanUlasan";
// import Kontak from "./page/HalamanKontak";

// // import UserMenu from "./page/HalamanPemesanan";
// // import HalamanUlasan from "./page/HalamanUlasan";
// // import HalamanKontak from "./page/HalamanKontak";
// // import HalamanStruk from "./page/HalamanStruk";
// // import Animation from "./page/Karausel";
// import Pesanan from "./page/HalamanPesanan";

// // import Dashboard from "./page/HalamanDashboardAdmin";

// //HALAMAN ADMIN
// import HalamanLogin from "./page/HalamanLogin";
// import Dashboard from "./page/HalamanDashboardAdmin";
// import AdminProduk from "./page/HalamanProduk";
// import UlasanAdmin from "./page/HalamanUlasanAdmin";

// //coba

// import Struk from "./page/HalamanStruk";
// import Coba from "./page/HalamanCoba";
// import Page from "./page/HalamanLoginPages";

// const App = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   return (
//     <Router>
//       <Routes>
//         {/* User */}
//         <Route path="/" element={<HalamanUtama />} />
//         <Route path="/route" element={<Routing />} />
//         <Route path="/kontak" element={<Kontak />} />

//         <Route path="/page" element={<Page />} />

//         <Route path="/beranda" element={<Beranda />} />
//         <Route path="/tentangkami" element={<TentangKami />} />
//         <Route path="/pemesanan" element={<Pemesanan />} />
//         <Route path="/ulasan" element={<Ulasan />} />
//         <Route path="/pesanan" element={<Pesanan />} />
//         <Route path="/produk" element={<AdminProduk />} />
//         <Route path="/struk" element={<Struk />} />
//         {/* <Route path="/animation" element={<Animation />} />
//         <Route path="/berita" element={<Berita />} /> */}

// {/* Halaman Login */}
// <Route
//   path="/page"
//   element={<Page setAuthenticated={setAuthenticated} />}
// />

//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/ulasanadmin" element={<UlasanAdmin />} />

//         <Route path="/login" element={<HalamanLogin />} />
//         <Route path="/coba" element={<Coba />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";

import HalamanUtama from "./page/HalamanSplashscreen";
import Routing from "./page/HalamanRoute";

// HALAMAN USER
import Beranda from "./page/HalamanBeranda";
import TentangKami from "./page/HalamanTentangKami";
import Pemesanan from "./page/HalamanPemesanan";
import Ulasan from "./page/HalamanUlasan";
import Kontak from "./page/HalamanKontak";
import Pesanan from "./page/HalamanPesanan";

// HALAMAN ADMIN
import HalamanLogin from "./page/HalamanLogin";
import Dashboard from "./page/HalamanDashboardAdmin";
import AdminProduk from "./page/HalamanProduk";
import UlasanAdmin from "./page/HalamanUlasanAdmin";
import Struk from "./page/HalamanStruk";
import Coba from "./page/HalamanCoba";
import Page from "./page/HalamanLoginPages";
import SelamatDatang from "./page/SelamatDatang";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // Mengecek status autentikasi dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<HalamanUtama />} />
        <Route path="/route" element={<Routing />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/ulasan" element={<Ulasan />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/produk" element={<AdminProduk />} />
        <Route path="/struk" element={<Struk />} />
        <Route path="/datang" element={<SelamatDatang />} />
        
        <Route
          path="/page"
          element={<Page setAuthenticated={setAuthenticated} />}
        />
        <Route path="/page" element={<Page />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ulasanadmin" element={<UlasanAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
