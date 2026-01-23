function WorkerCard({ name, role, experience, photo }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <img src={photo} alt={name} width="100" />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{experience}</p>
    </div>
  );
}

export default WorkerCard;
