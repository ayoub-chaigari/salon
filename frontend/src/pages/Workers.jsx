import { useEffect, useState } from "react";
import { getWorkers } from "../services/api";
import WorkerCard from "../components/WorkerCard";

function Workers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers().then(res => setWorkers(res.data));
  }, []);

  return (
    <div>
      <h1>Our Team</h1>
      {workers.map(w => (
        <WorkerCard key={w.id} {...w} />
      ))}
    </div>
  );
}

export default Workers;
