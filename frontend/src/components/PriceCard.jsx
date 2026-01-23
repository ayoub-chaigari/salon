function PriceCard({ name, price, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>{price} MAD</strong>
    </div>
  );
}

export default PriceCard;
