const express = require("express");
const {
  createCity,
  deleteCity,
  getCity,
  updateCity,
} = require("../../controllers/city-controllers");

const router = express.Router();

router.post("/city", createCity);

module.exports = router;
