import { useEffect, useState } from "react";
import { getServices } from "../services/api";
import ReservationForm from "../components/ReservationForm";

function Contact() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(res => setServices(res.data));
  }, []);

  return (
    <div>
      <h1>Make a Reservation</h1>
      <ReservationForm services={services} />
    </div>
  );
}

export default Contact;
