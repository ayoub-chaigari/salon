const db = require("../config/db");

exports.createReservation = (req, res) => {
     

  const { name, phone, email, service_id, date, time } = req.body;
   
  db.query(
    "INSERT INTO reservations (name, phone, email, service_id, date, time) VALUES (?, ?, ?, ?, ?, ?)",
    [name, phone, email, service_id, date, time],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Reservation created" });
    }
  );
};

exports.getReservations = (req, res) => {
  db.query("SELECT * FROM reservations", (err, results) => {
    if (err) return res.status(500).json(err);
    console.error("DB ERROR:", err); 
    res.json(results);
  });
};

exports.updateReservation = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  db.query(
    "UPDATE reservations SET status = ? WHERE id = ?",
    [status, id],
    (err, result) => {
      if (err) {
        console.error("DB ERROR:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      res.json({ message: "Reservation updated" });
    }
  );
};
