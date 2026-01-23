const express = require("express");
const router = express.Router();
const reservationsController = require("../controllers/reservationsController");

router.post("/", reservationsController.createReservation);
router.get("/", reservationsController.getReservations);
router.put("/:id", reservationsController.updateReservation);
module.exports = router;
