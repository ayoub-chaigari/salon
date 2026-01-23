import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/workers" className="nav-link">Workers</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/pages/login" className="nav-link login-link">Admin Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
