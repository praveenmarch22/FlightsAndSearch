const express = require("express");
const {
  createCity,
  deleteCity,
  getCity,
  updateCity,
} = require("../../controllers/city-controllers");

const router = express.Router();

router.post("/city", createCity);
router.delete("/city/:id", deleteCity);
router.get("/city/:id", getCity);
router.patch("/city/:id", updateCity);

module.exports = router;
