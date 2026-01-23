import { useEffect, useState } from "react";
import { getServices } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getServices().then(res => setServices(res.data));
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="fade-down">Glowing Skin / Beautiful You</h1>
          <p className="fade-up">
            We make sure you look and feel amazing with glowing skin
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/contact")}>
              Book Now
            </button>
            <button className="outline">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <h4>WHY CHOOSE US</h4>
        <h2>We’re a Professional Beauty Salon</h2>
        <p>
          We combine modern beauty techniques with professional care
          to give you the best experience.
        </p>
        <button>Learn More</button>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map(s => (
            <div
              key={s.id}
              className="service-card slide-up"
              onClick={() => navigate("/contact")}
            >
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <span>${s.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR */}
      <section className="popular">
        <div className="popular-overlay">
          <h2>Our Most Popular Treatments</h2>
          <div className="popular-grid">
            <div className="popular-card">
              <h3>Facial Treatment</h3>
              <p>Deep skin care by experts</p>
            </div>
            <div className="popular-card">
              <h3>Hair Styling</h3>
              <p>Modern & classic styles</p>
            </div>
            <div className="popular-card">
              <h3>Makeup</h3>
              <p>For all occasions</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
