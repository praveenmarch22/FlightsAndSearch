const { CityService } = require("../services/index");

const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      success: true,
      data: city,
      message: "City is added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
      message: "Failed to add city data",
    });
  }
};

const deleteCity = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      success: true,
      data: response,
      message: "City is deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to delete the city data",
    });
  }
};

const getCity = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      success: true,
      data: response,
      message: "City data is fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to get the city data",
    });
  }
};

const updateCity = async (req, res) => {
  try {
    console.log(req.params.id, "-----", req.body);
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: response,
      message: "City data is updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to get the city data",
    });
  }
};

const getALLCities = async (req, res) => {
  try {
    console.log(req.query);
    const response = await cityService.getAllCities(req.query);
    return res.status(200).json({
      success: true,
      data: response,
      message: "City data is updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to get the city data",
    });
  }
};

module.exports = {
  createCity,
  deleteCity,
  getCity,
  updateCity,
  getALLCities,
};
