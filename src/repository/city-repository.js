const { where } = require("sequelize");
const { City } = require("../models");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Error creating city:", error);
      throw error;
    }
  }

  async getCity({ cityId }) {
    try {
      const res = await City.findByPk(cityId);
      return res;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const res = await City.update(data, {
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const res = await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
