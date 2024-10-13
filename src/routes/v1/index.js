const express = require("express");
const {
  createCity,
  deleteCity,
  getCity,
  updateCity,
  getALLCities,
} = require("../../controllers/city-controllers");

const router = express.Router();

router.post("/city", createCity);
router.delete("/city/:id", deleteCity);
router.get("/city/:id", getCity);
router.patch("/city/:id", updateCity);
router.get("/city", getALLCities);

module.exports = router;
