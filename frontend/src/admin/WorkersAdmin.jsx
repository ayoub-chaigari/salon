import { useEffect, useState } from "react";
import { getWorkers, addWorker, deleteWorker } from "../services/api";

function WorkersAdmin() {
  const [workers, setWorkers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    experience: "",
    photo_url: ""
  });

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    getWorkers().then(res => setWorkers(res.data));
  };

  const submit = async () => {
    await addWorker(form);
    setForm({ name: "", role: "", experience: "", photo_url: "" });
    load();
  };

  return (
    <div>
      <h2>Workers</h2>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Role" onChange={e => setForm({ ...form, role: e.target.value })} />
      <input placeholder="Experience" onChange={e => setForm({ ...form, experience: e.target.value })} />
      <input placeholder="Photo URL" onChange={e => setForm({ ...form, photo_url: e.target.value })} />
      <button onClick={submit}>Add</button>

      <ul>
        {workers.map(w => (
          <li key={w.id}>
            {w.name} - {w.role}
            <button onClick={() => deleteWorker(w.id).then(load)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkersAdmin;
