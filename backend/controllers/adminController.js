const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "mySuperSecretKey123"; // store in .env in production

exports.login = (req, res) => {
   
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM admins WHERE username=?",
    [username],
    async (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0)
        return res.status(400).json({ message: "Admin not found" });

      const admin = results[0];

      const match = await bcrypt.compare(password, admin.password);
      if (!match) return res.status(400).json({ message: "Wrong password" });

      // create JWT token
      const token = jwt.sign({ id: admin.id, username }, SECRET_KEY, { expiresIn: "1h" });

      res.json({ token });
    }
  );
};
