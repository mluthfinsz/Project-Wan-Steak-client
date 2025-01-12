import React from "react";
import BeritaCarousel from "../component/ComponentUser/Berita";

const Home = () => {
  // Data berita contoh
  const beritaList = [
    {
      judul: "Perkembangan Teknologi AI",
      isi: "Teknologi kecerdasan buatan (AI) terus berkembang pesat dengan berbagai aplikasi di sektor industri, kesehatan, dan pendidikan...",
    },
    {
      judul: "Peningkatan Ekonomi Digital",
      isi: "Ekonomi digital Indonesia diperkirakan akan mencapai 150 miliar dolar pada tahun 2025 dengan perkembangan e-commerce, fintech, dan startup lokal...",
    },
    {
      judul: "Olahraga Nasional Meningkat",
      isi: "Prestasi olahraga nasional terus meningkat dengan berbagai medali yang diraih dalam ajang internasional seperti SEA Games dan Asian Games...",
    },
    {
      judul: "Peluang Bisnis di Era Digital",
      isi: "Era digital membuka peluang bisnis baru dengan inovasi di bidang teknologi seperti blockchain, AI, dan IoT...",
    },
    {
      judul: "Pendidikan Online Semakin Populer",
      isi: "Platform pendidikan online semakin diminati oleh masyarakat untuk belajar di mana saja dan kapan saja...",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "20px 0",
      }}
    >
      {/* Komponen BeritaCarousel menerima beritaList sebagai props */}
      <BeritaCarousel beritaList={beritaList} />
    </div>
  );
};

export default Home;
