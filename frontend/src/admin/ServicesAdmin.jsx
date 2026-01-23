import { useEffect, useState } from "react";
import { getServices, addService, deleteService } from "../services/api";

function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    getServices().then(res => setServices(res.data));
  };

  const submit = async () => {
    await addService(form);
    setForm({ name: "", price: "", description: "" });
    load();
  };

  return (
    <div>
      <h2>Services</h2>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <button onClick={submit}>Add</button>

      <ul>
        {services.map(s => (
          <li key={s.id}>
            {s.name} - {s.price} MAD
            <button onClick={() => deleteService(s.id).then(load)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesAdmin;
