const db = require("../config/db");

exports.getWorkers = (req, res) => {
  db.query("SELECT * FROM workers", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addWorker = (req, res) => {
  const { name, role, experience, photo_url } = req.body;
  db.query(
    "INSERT INTO workers (name, role, experience, photo_url) VALUES (?, ?, ?, ?)",
    [name, role, experience, photo_url],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Worker added", id: result.insertId });
    }
  );
};

exports.deleteWorker = (req, res) => {
  const { id } = req.params;
    // Safe to delete
    db.query("DELETE FROM workers WHERE id = ?", [id], (err, result) => {
      if (err) return res.status(500).json({ message: "DB error", error: err });
      if (result.affectedRows === 0) return res.status(404).json({ message: "Worker not found" });

      res.json({ message: "Worker deleted successfully" });
    });
  };
;