import { useNavigate } from "react-router-dom";

function Sidebar({ setPage }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/pages/Home"); // redirect to login
  };

  return (
    <div
      style={{
        width: 200,
        background: "#222",
        color: "white",
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h3>Admin</h3>

      <button onClick={() => setPage("services")}>Services</button><br />
      <button onClick={() => setPage("workers")}>Workers</button><br />
      <button onClick={() => setPage("reservations")}>Reservations</button><br />

      <hr style={{ margin: "15px 0" }} />

      <button
        onClick={handleLogout}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
