const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const servicesRoutes = require("./routes/servicesRoutes");
const workersRoutes = require("./routes/workersRoutes");
const reservationsRoutes = require("./routes/reservationsRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();



app.use(cors({origin: "http://localhost:3000",
  credentials: true}));
app.use(bodyParser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/workers", workersRoutes);
app.use("/api/reservations", reservationsRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
