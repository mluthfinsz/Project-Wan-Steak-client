import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState({});
  const [isChosen, setIsChosen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const response = await axios.get("http://localhost:5000/menu");
    setMenus(response.data);
  };

  const updateMenuStock = (menuId, quantity) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === menuId
          ? { ...menu, stok: Math.max(menu.stok - quantity, 0) }
          : menu
      )
    );
  };

  const addToCart = (menuId) => {
    const updatedQuantity = (cart[menuId] || 0) + 1;
    setCart({
      ...cart,
      [menuId]: updatedQuantity,
    });
    updateMenuStock(menuId, 1);
  };

  const subtractFromCart = (menuId) => {
    const updatedQuantity = Math.max((cart[menuId] || 0) - 1, 0);
    setCart({
      ...cart,
      [menuId]: updatedQuantity,
    });
    if (cart[menuId] > 0) {
      updateMenuStock(menuId, -1);
    }
  };

  const handleChooseOrder = () => {
    setIsChosen(true);
  };

  // const handleConfirmOrder = async () => {
  //   try {
  //     // Menghitung total harga
  //     const totalHarga = Object.entries(cart).reduce(
  //       (total, [menuId, quantity]) => {
  //         const menu = menus.find((m) => m.id === parseInt(menuId));
  //         return total + (menu?.harga || 0) * quantity;
  //       },
  //       0
  //     );

  //     // Membuat daftar item berdasarkan pesanan
  //     const selectedItems = Object.entries(cart)
  //       .filter(([menuId, quantity]) => quantity > 0)
  //       .map(([menuId, quantity]) => {
  //         const menu = menus.find((m) => m.id === parseInt(menuId));
  //         return {
  //           menu_id: menu?.id,
  //           nama: menu?.nama, // Tambahkan nama menu
  //           jumlah: quantity,
  //           harga: menu?.harga * quantity,
  //         };
  //       });

  //     // Mendapatkan data pelanggan dan meja
  //     const namaPelanggan = document.getElementById("namaPemesan").value;
  //     const meja = document.getElementById("nomorMeja").value;

  //     // Mengirim data pesanan ke backend
  //     const response = await axios.post(
  //       "http://localhost:5000/api/save-order",
  //       {
  //         namaPelanggan,
  //         meja,
  //         items: selectedItems,
  //         totalHarga,
  //       }
  //     );

  //     // Navigasi ke halaman struk setelah berhasil menyimpan pesanan
  //     navigate("/struk", {
  //       state: {
  //         namaPelanggan,
  //         meja,
  //         items: selectedItems, // Pastikan items berisi nama menu
  //         totalHarga,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Error saving order:", error);
  //   }
  // };

  const handleConfirmOrder = async () => {
    try {
      // Menghitung total harga
      const totalHarga = Object.entries(cart).reduce(
        (total, [menuId, quantity]) => {
          const menu = menus.find((m) => m.id === parseInt(menuId));
          return total + (menu?.harga || 0) * quantity;
        },
        0
      );

      // Membuat daftar item berdasarkan pesanan
      const selectedItems = Object.entries(cart)
        .filter(([menuId, quantity]) => quantity > 0)
        .map(([menuId, quantity]) => {
          const menu = menus.find((m) => m.id === parseInt(menuId));
          console.log(menu); // Log untuk memastikan bahwa menu ditemukan
          return {
            menu_id: menu?.id,
            nama: menu?.nama || "Nama menu tidak ditemukan", // Pastikan nama tidak undefined
            jumlah: quantity,
            harga: (menu?.harga || 0) * quantity, // Pastikan harga tidak undefined
          };
        });

      // Validasi data pelanggan dan meja
      const namaPelanggan = document.getElementById("namaPemesan").value;
      const meja = document.getElementById("nomorMeja").value;

      if (!namaPelanggan || !meja) {
        alert("Nama pelanggan dan nomor meja harus diisi.");
        return;
      }

      // Mengirim data pesanan ke backend
      const response = await axios.post(
        "http://localhost:5000/api/save-order",
        {
          namaPelanggan,
          meja,
          items: selectedItems,
          totalHarga,
        }
      );

      // Pastikan data yang dikirim ke backend benar
      console.log(response.data); // Log response untuk memastikan data terkirim dengan benar

      // Navigasi ke halaman struk setelah berhasil menyimpan pesanan
      navigate("/struk", {
        state: {
          namaPelanggan,
          meja,
          items: selectedItems, // Pastikan items berisi nama menu
          totalHarga,
        },
      });
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Terjadi kesalahan saat memproses pesanan.");
    }
  };

  const totalPrice = Object.entries(cart).reduce(
    (total, [menuId, quantity]) => {
      const menu = menus.find((m) => m.id === parseInt(menuId));
      return total + menu.harga * quantity;
    },
    0
  );

  // Separate menus into main and other categories
  const mainMenus = menus.slice(0, 3); // Assume first 3 menus are main menus
  const otherMenus = menus.slice(3);

  return (
    <Container className="mt-0">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Merriweather, serif",
          fontWeight: "bold",
          color: "black",

          marginBottom: "10px",
        }}
      >
        Steak
      </h1>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Rasa, serif",
          fontWeight: "bold",
          color: "black",
          fontSize: "24px",
          maxWidth: "650px", // Batas lebar maksimal teks
          margin: "0 auto", // Pusatkan teks secara horizontal
          lineHeight: "1.6", // Jarak antar baris
          marginBottom: "50px",
        }}
      >
        “Ayam panggang berbumbu rahasia dengan saus khas, kentang wedges, dan
        sayuran rebus.”
      </p>

      {/* Main menus */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {mainMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            cart={cart}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
            fontSize={18}
          />
        ))}
      </div>

      {/* Other menus */}
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Merriweather, serif",
          fontWeight: "bold",
          color: "black",
          marginTop: "50px",
        }}
      >
        Menu Lain
      </h1>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Rasa, serif",
          fontWeight: "bold",
          color: "black",
          fontSize: "24px",
          maxWidth: "650px", // Batas lebar maksimal teks
          margin: "0 auto", // Pusatkan teks secara horizontal
          lineHeight: "1.6", // Jarak antar baris
          marginBottom: "50px",
        }}
      >
        “Ayam panggang berbumbu rahasia dengan saus khas, kentang wedges, dan
        sayuran rebus.”
      </p>
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
        {otherMenus.slice(0, 4).map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            cart={cart}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
            fontSize={12}
          />
        ))}
      </div>

      {/* Align the last 3 cards to center */}
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center ">
        {otherMenus.slice(4).map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            cart={cart}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
            fontSize={12}
          />
        ))}
      </div>

      {isChosen && (
        <div
          className="mt-5 rounded-2"
          style={{
            border: "3px solid #344A1F",
            padding: "1rem",
            fontFamily: "Merriweather, serif",
          }}
        >
          {/* Placeholder for Nama dan Nomor Meja */}
          <div className="mb-4">
            <div className="mb-3">
              <label
                htmlFor="namaPemesan"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: "bold",
                  color: "black", // Font label hitam
                }}
              >
                Nama Pemesan
              </label>
              <input
                type="text"
                id="namaPemesan"
                placeholder="Masukkan nama pemesan"
                className="form-control"
                style={{
                  fontFamily: "Merriweather, serif",
                  border: "1px solid #ECE2C5",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="nomorMeja"
                style={{
                  fontFamily: "Merriweather, serif",
                  fontWeight: "bold",
                  color: "black", // Font label hitam
                }}
              >
                Nomor Meja
              </label>
              <input
                type="text"
                id="nomorMeja"
                placeholder="Masukkan nomor meja"
                className="form-control"
                style={{
                  fontFamily: "Merriweather, serif",
                  border: "1px solid #ECE2C5",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Plyafair Display, serif",
              fontWeight: "bolder",
              fontSize: "28px",
              color: "black",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Rincian Pesanan Anda
          </h1>

          <Table
            striped
            bordered
            hover
            style={{
              backgroundColor: "#344A1F", // Warna background tabel hijau tua
              color: "#344A1F", // Warna teks tabel putih
              borderColor: "#344A1F", // Warna border tabel
            }}
          >
            <thead>
              <tr>
                <th style={{ color: "#344A1F" }}>#</th>
                <th style={{ color: "#344A1F" }}>Nama Menu</th>
                <th style={{ color: "#344A1F" }}>Jumlah</th>
                <th style={{ color: "#344A1F" }}>Harga</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cart)
                .filter(([menuId, quantity]) => quantity > 0)
                .map(([menuId, quantity], index) => {
                  const menu = menus.find((m) => m.id === parseInt(menuId));
                  return (
                    <tr key={menuId}>
                      <td style={{ color: "#344A1F" }}>{index + 1}</td>
                      <td style={{ color: "#344A1F" }}>{menu?.nama}</td>
                      <td style={{ color: "#344A1F" }}>{quantity}</td>
                      <td style={{ color: "#344A1F" }}>
                        Rp {menu?.harga * quantity}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <h4
            style={{
              textAlign: "right",
              fontWeight: "bold",
              marginTop: "20px",
              color: "white",
            }}
          >
            Total Harga: Rp {totalPrice.toLocaleString()}
          </h4>
        </div>
      )}

      <div className="d-flex justify-content-center mt-3">
        {!isChosen ? (
          <Button
            onClick={handleChooseOrder}
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#F4BE16",
              border: "none",
              marginTop: "50px",
              marginBottom: "50px",
              width: "75%",
              height: "50px",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(239, 231, 231, 0.1)",
            }}
          >
            Pilih Pesanan
          </Button>
        ) : (
          <Button
            onClick={handleConfirmOrder}
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: "bold",
              fontSize: "18px",
              color: "white",
              backgroundColor: "#F4BE16",
              border: "none",
              marginTop: "50px",
              marginBottom: "10px",
              width: "70%",
              height: "50px",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            Lanjutkan Pembayaran
          </Button>
        )}
      </div>

      {isChosen && (
        <p
          style={{
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            fontSize: "14px",
            fontWeight: "bolder",
            lineHeight: "1.5",
            color: "black",
            margin: "auto",
            maxWidth: "650px",
            marginBottom: "50px",
          }}
        >
          Pastikan pesanan anda sudah sesuai, pesanan ini tidak dapat di
          batalkan!
        </p>
      )}
    </Container>
  );
};

const MenuCard = ({ menu, cart, addToCart, subtractFromCart, fontSize }) => (
  <div className="col">
    <div className="card-container" style={{ position: "relative" }}>
      <div
        className="card rounded-5 p-4 border-0 border-primary"
        style={{
          width: "100%",
          height: "350px",
          backgroundColor: "#F9F9F9", // Warna card diubah menjadi #F9F9F9
          boxShadow: "0px 9px 20px rgba(0, 0, 0, 0.2)", // Efek drop shadow
          position: "relative",
          borderRadius: "50px",
          overflow: "hidden",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {menu.gambar && (
          <img
            src={`http://localhost:5000${menu.gambar}`}
            className="card-img-top"
            style={{
              height: "150px",
              width: "100%", // Menggunakan 100% untuk lebar penuh
              borderRadius: "20px",
              objectFit: "contain", // Menampilkan gambar sepenuhnya tanpa terpotong
              objectPosition: "center", // Memastikan posisi gambar di tengah
            }}
            alt={menu.nama}
          />
        )}
        <div className="card-body" style={{ position: "relative" }}>
          <p
            className="card-text"
            style={{
              fontFamily: "Rasa, serif", // Menggunakan font Rasa
              fontWeight: "bold", // Bold
              fontSize: `${fontSize}px`, // Ukuran teks dinamis
              color: "black", // Warna teks
            }}
          >
            {menu.nama}
          </p>
          <p
            className="card-price"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              fontFamily: "Rasa, serif", // Menggunakan font Rasa
              fontWeight: "bold", // Bold
              fontSize: "14px", // Ukuran teks
              color: "black", // Warna teks
            }}
          >
            Rp{menu.harga}
          </p>
          <p
            className="card-stock"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              fontFamily: "Rasa, serif", // Menggunakan font Rasa
              fontWeight: "bold", // Bold
              fontSize: "14px", // Ukuran teks
              color: menu.stok === 0 ? "red" : "black", // Warna merah jika stok habis
            }}
          >
            {menu.stok === 0 ? "Habis" : `Stock: ${menu.stok}`}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              onClick={() => subtractFromCart(menu.id)}
              disabled={menu.stok === 0 || (cart[menu.id] || 0) <= 0}
              style={{
                backgroundColor: "#344A1F", // Warna tombol
                border: "none", // Hapus border
                color: "white", // Warna teks tombol
              }}
            >
              -
            </Button>
            <span
              style={{
                fontFamily: "Rasa, serif", // Menggunakan font Rasa
                fontWeight: "bold", // Bold
                fontSize: "16px", // Ukuran teks
                color: "black", // Warna teks
              }}
            >
              {cart[menu.id] || 0}
            </span>
            <Button
              onClick={() => addToCart(menu.id)}
              disabled={menu.stok === 0}
              style={{
                backgroundColor: "#344A1F", // Warna tombol
                border: "none", // Hapus border
                color: "white", // Warna teks tombol
              }}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserMenu;
