import { useState } from "react";
import Sidebar from "./Sidebar";
import ServicesAdmin from "./ServicesAdmin";
import WorkersAdmin from "./WorkersAdmin";
import ReservationsAdmin from "./ReservationsAdmin";

function AdminDashboard() {
  const [page, setPage] = useState("services");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar setPage={setPage} />
      <div style={{ flex: 1, padding: 20 }}>
        {page === "services" && <ServicesAdmin />}
        {page === "workers" && <WorkersAdmin />}
        {page === "reservations" && <ReservationsAdmin />}
      </div>
    </div>
  );
}

export default AdminDashboard;
