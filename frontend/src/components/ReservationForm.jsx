import { useState } from "react";
import { addReservation } from "../services/api";
import "./ReservationForm.css";

function ReservationForm({ services }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service_id: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addReservation(form);
    alert("Reservation sent!");
  };

  return (
    <div className="reservation-container">
      <h2>Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="reservation-form">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />

        <select name="service_id" onChange={handleChange} required>
          <option value="">Select Service</option>
          {services.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <div className="date-time">
          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />
        </div>

        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
}

export default ReservationForm;
