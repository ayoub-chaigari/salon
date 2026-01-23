import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Workers from "./pages/Workers";
import Contact from "./pages/Contact";
import AdminDashboard from "./admin/AdminDashboard";
import Login from "./pages/Login";

function Layout({ children }) {
  const location = useLocation();

  // Hide Navbar/Footer for admin pages
  const hideNavFooter = location.pathname.startsWith("/admin") || location.pathname === "/pages/login";

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
