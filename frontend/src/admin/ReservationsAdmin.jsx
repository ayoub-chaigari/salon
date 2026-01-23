import { useEffect, useState } from "react";
import { getReservations, updateReservation } from "../services/api";

function ReservationsAdmin() {
  const [reservations, setReservations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    getReservations().then(res => setReservations(res.data));
  };

  const changeStatus = (id, status) => {
    updateReservation(id, status).then(load);
  };

  // 🔍 Filter reservations
  const filteredReservations = reservations.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.phone.includes(search) ||
    r.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Reservations</h2>

      {/* 🔍 Search bar */}
      <input
        type="text"
        placeholder="Search by name, phone or status..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px"
        }}
      />

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredReservations.length > 0 ? (
            filteredReservations.map(r => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.service_id}</td>
                <td>{r.phone}</td>
                <td>{r.date} {r.time}</td>
                <td>{r.status}</td>
                <td>
                  <button onClick={() => changeStatus(r.id, "confirmed")}>✔</button>
                  <button onClick={() => changeStatus(r.id, "canceled")}>✖</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsAdmin;
