// import React, { useState, useEffect } from "react";
// import Sidebar from "./SidebarAdmin";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [startDate, setStartDate] = useState(""); // Tanggal awal
//   const [endDate, setEndDate] = useState(""); // Tanggal akhir
//   const [filteredData, setFilteredData] = useState([]); // State untuk data yang sudah difilter

//   const username = "Admin";

//   const dashboardWrapperStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//   };

//   const dashboardContainerStyle = {
//     display: "flex",
//     width: "80%",
//     maxWidth: "1200px",
//     minHeight: "80vh",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//   };

//   const mainContentStyle = {
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column",
//   };

//   const headerStyle = {
//     padding: "16px",
//     backgroundColor: "#f1f1f1",
//     borderBottom: "1px solid #ddd",
//     fontSize: "18px",
//     fontWeight: "bold",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontFamily: "Noto Serif, serif",
//   };

//   const bodyStyle = {
//     padding: "24px",
//     flex: 1,
//     backgroundColor: "rgba(246, 246, 246, 0.3)",
//     fontFamily: "Lora, serif",
//   };

//   const toggleButtonStyle = {
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     padding: "8px 12px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   };

//   const dividerStyle = {
//     width: "10px",
//     backgroundColor: "inherit",
//     boxShadow: "none",
//   };

//   const tableContainerStyle = {
//     maxHeight: "300px",
//     overflowY: "auto",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     backgroundColor: "#fff",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//   };

//   const thStyle = {
//     padding: "12px",
//     backgroundColor: "#f1f1f1",
//     textAlign: "left",
//     borderBottom: "2px solid #ddd",
//   };

//   const tdStyle = {
//     padding: "12px",
//     borderBottom: "1px solid #ddd",
//   };

//   const filterContainerStyle = {
//     marginBottom: "16px",
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "16px",
//   };

//   const dropdownStyle = {
//     padding: "8px",
//     borderRadius: "4px",
//     border: "1px solid #ddd",
//     fontSize: "14px",
//   };

//   const inputDateStyle = {
//     padding: "8px",
//     borderRadius: "4px",
//     border: "1px solid #ddd",
//     fontSize: "14px",
//   };

//   const searchButtonStyle = {
//     backgroundColor: "#28a745",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     alignSelf: "flex-start", // Ensures button aligns properly
//   };

//   // Data untuk contoh, ganti dengan nama pelanggan sesuai data nyata Anda
//   const tableData = [
//     {
//       no: 1,
//       nama: "John Doe", // Ganti dengan nama pelanggan yang sebenarnya
//       tanggal: "2024-12-15",
//       jumlah: 150000,
//       status: "Pending",
//     },
//     {
//       no: 2,
//       nama: "Jane Smith", // Ganti dengan nama pelanggan yang sebenarnya
//       tanggal: "2024-12-14",
//       jumlah: 100000,
//       status: "Complete",
//     },
//     {
//       no: 3,
//       nama: "Michael Johnson", // Ganti dengan nama pelanggan yang sebenarnya
//       tanggal: "2024-12-13",
//       jumlah: 200000,
//       status: "Cancelled",
//     },
//     {
//       no: 4,
//       nama: "Emily Davis", // Ganti dengan nama pelanggan yang sebenarnya
//       tanggal: "2024-12-12",
//       jumlah: 120000,
//       status: "Pending",
//     },
//     // Tambah data lainnya sesuai kebutuhan
//   ];

//   // Fungsi untuk memfilter data berdasarkan status dan rentang tanggal
//   const filterData = () => {
//     const filtered = tableData.filter((data) => {
//       const dataDate = new Date(data.tanggal);
//       const startDateMatch =
//         startDate === "" || new Date(startDate) <= dataDate;
//       const endDateMatch = endDate === "" || dataDate <= new Date(endDate);
//       const statusMatch =
//         filterStatus === "All" || data.status === filterStatus;

//       return startDateMatch && endDateMatch && statusMatch;
//     });
//     setFilteredData(filtered);
//   };

//   // UseEffect untuk memfilter data pertama kali setelah halaman dimuat
//   useEffect(() => {
//     filterData();
//   }, []); // Empty dependency array to run once when the component is mounted

//   return (
//     <div style={dashboardWrapperStyle}>
//       <div style={dashboardContainerStyle}>
//         {isSidebarOpen && <Sidebar />}
//         {isSidebarOpen && <div style={dividerStyle}></div>}
//         <div style={mainContentStyle}>
//           <div style={headerStyle}>
//             <h5>Laporan Penjualan</h5>
//             <span>{username}</span>
//           </div>

//           <div style={bodyStyle}>
//             <h5>Cari Data</h5>

//             <div style={filterContainerStyle}>
//               <label>
//                 Status:{" "}
//                 <select
//                   style={dropdownStyle}
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value)}
//                 >
//                   <option value="All">Semua</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Complete">Complete</option>
//                   <option value="Cancelled">Cancelled</option>
//                 </select>
//               </label>
//               <label>
//                 Dari Tanggal:{" "}
//                 <input
//                   type="date"
//                   style={inputDateStyle}
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Sampai Tanggal:{" "}
//                 <input
//                   type="date"
//                   style={inputDateStyle}
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                 />
//               </label>
//               <button style={searchButtonStyle} onClick={filterData}>
//                 Cari
//               </button>
//             </div>

//             <h5>Data</h5>

//             <div style={tableContainerStyle}>
//               <table style={tableStyle}>
//                 <thead>
//                   <tr>
//                     <th style={thStyle}>No</th>
//                     <th style={thStyle}>Nama</th>
//                     <th style={thStyle}>Tanggal</th>
//                     <th style={thStyle}>Jumlah (Total Harga)</th>
//                     <th style={thStyle}>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredData.map((data, index) => (
//                     <tr key={index}>
//                       <td style={tdStyle}>{data.no}</td>
//                       <td style={tdStyle}>{data.nama}</td>
//                       <td style={tdStyle}>{data.tanggal}</td>
//                       <td style={tdStyle}>Rp {data.jumlah.toLocaleString()}</td>
//                       <td style={tdStyle}>{data.status}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";

const Dashboard = ({ orders }) => {
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState({
    start: "",
    end: "",
  });

  // Fungsi untuk memfilter berdasarkan status dan tanggal
  const filterOrders = () => {
    let filtered = [...orders];

    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    if (dateFilter.start && dateFilter.end) {
      filtered = filtered.filter((order) => {
        const orderDate = new Date(order.created_at);
        const startDate = new Date(dateFilter.start);
        const endDate = new Date(dateFilter.end);
        return orderDate >= startDate && orderDate <= endDate;
      });
    }

    setFilteredOrders(filtered);
  };

  return (
    <div>
      {/* Filter untuk status */}
      <div className="mb-3">
        <label>Status: </label>
        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Semua</option>
          <option value="Completed">Selesai</option>
          <option value="Pending">Menunggu</option>
          <option value="Cancelled">Dibatalkan</option>
        </select>
      </div>

      {/* Filter untuk rentang tanggal */}
      <div className="mb-3">
        <label>Rentang Tanggal: </label>
        <input
          type="date"
          className="form-control"
          value={dateFilter.start}
          onChange={(e) =>
            setDateFilter({ ...dateFilter, start: e.target.value })
          }
        />
        <input
          type="date"
          className="form-control mt-2"
          value={dateFilter.end}
          onChange={(e) =>
            setDateFilter({ ...dateFilter, end: e.target.value })
          }
        />
      </div>

      <button className="btn btn-primary" onClick={filterOrders}>
        Terapkan Filter
      </button>

      {/* Tabel pesanan */}
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID Pesanan</th>
            <th>Nama Pelanggan</th>
            <th>Total Harga</th>
            <th>Tanggal Pemesanan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.nama_pelanggan}</td>
              <td>Rp {order.total_harga.toLocaleString()}</td>
              <td>{new Date(order.created_at).toLocaleDateString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
