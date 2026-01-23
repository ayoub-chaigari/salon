const db = require("../config/db");

// GET all services
exports.getServices = (req, res) => {
  db.query("SELECT * FROM services", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// ADD service
exports.addService = (req, res) => {
  const { name, price, description } = req.body;
  db.query(
    "INSERT INTO services (name, price, description) VALUES (?, ?, ?)",
    [name, price, description],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Service added", id: result.insertId });
    }
  );
};

// UPDATE service
exports.updateService = (req, res) => {
  const { name, price, description } = req.body;
  db.query(
    "UPDATE services SET name=?, price=?, description=? WHERE id=?",
    [name, price, description, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Service updated" });
    }
  );
};

// DELETE service
exports.deleteService = (req, res) => {
  db.query(
    "DELETE FROM services WHERE id=?",
    [req.params.id],
    (err) => {
        console.error("DB ERROR:", err); 
      if (err) return res.status(500).json(err);
      res.json({ message: "Service deleted" });
    }
  );
};
