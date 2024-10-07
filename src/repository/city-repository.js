const { where } = require("sequelize");
const { City } = require("../models");

class CityRepository {
  async createCity({ name }) {
    try {
      const res = await City.create({
        name: name,
      });
    } catch (error) {
      throw { error };
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
