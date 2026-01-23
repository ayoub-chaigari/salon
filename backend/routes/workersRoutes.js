const express = require("express");
const router = express.Router();
const workersController = require("../controllers/workersController");

router.get("/", workersController.getWorkers);
router.post("/", workersController.addWorker);
router.delete("/:id", workersController.deleteWorker);

module.exports = router;
