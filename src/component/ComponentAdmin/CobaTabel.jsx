// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminPage = () => {
//   const [orders, setOrders] = useState([]);

//   // Fetch orders from backend
//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/get-orders");
//       setOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   // Handle status change
//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/update-order-status/${orderId}`,
//         {
//           status: newStatus,
//         }
//       );

//       // Update the local state
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order.id === orderId ? { ...order, status: newStatus } : order
//         )
//       );
//     } catch (error) {
//       console.error("Error updating order status:", error);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Format the date to just show DD/MM/YYYY
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString(); // Only display date without time
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Admin - Daftar Pesanan</h1>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID Pesanan</th>
//             <th>Nama Pelanggan</th>
//             <th>Nomor Meja</th>
//             <th>Nama Pesanan</th>
//             <th>Total Harga</th>
//             <th>Tanggal Pemesanan</th> {/* Kolom baru untuk tanggal */}
//             <th>Status</th>
//             <th>Aksi</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.nama_pelanggan}</td>
//               <td>{order.nomor_meja}</td>
//               <td>
//                 {order.items.map((item, index) => (
//                   <div key={index}>
//                     <strong>{item.nama}</strong> x {item.jumlah} - Rp{" "}
//                     {(item.harga || 0).toLocaleString()}
//                   </div>
//                 ))}
//               </td>
//               <td>Rp {order.total_harga.toLocaleString()}</td>
//               <td>{formatDate(order.created_at)}</td>{" "}
//               {/* Menampilkan tanggal tanpa waktu */}
//               <td>{order.status}</td>
//               <td>
//                 <button
//                   className="btn btn-success btn-sm me-2"
//                   onClick={() => handleStatusChange(order.id, "Completed")}
//                 >
//                   Tandai Selesai
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleStatusChange(order.id, "Cancelled")}
//                 >
//                   Batalkan
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPage;
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Handle status change
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/update-order-status/${orderId}`,
        {
          status: newStatus,
        }
      );

      // Update the local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Format the date to just show DD/MM/YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Only display date without time
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin - Daftar Pesanan</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>No Meja</th>
            <th>Pesanan</th>
            <th>Total Harga</th>
            <th>Tanggal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.nama_pelanggan}</td>
              <td>{order.nomor_meja}</td>
              <td>
                {order.items.map((item, index) => (
                  <div key={index}>
                    <strong>{item.nama}</strong> x {item.jumlah} - Rp{" "}
                    {(item.harga || 0).toLocaleString()}
                  </div>
                ))}
              </td>
              <td>Rp {order.total_harga.toLocaleString()}</td>
              <td>{formatDate(order.created_at)}</td>
              <td>
                {order.status !== "Terbayar" ? (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleStatusChange(order.id, "Terbayar")}
                  >
                    Tandai Terbayar
                  </button>
                ) : (
                  <span>Terbayar</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
