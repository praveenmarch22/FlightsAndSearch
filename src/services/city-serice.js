const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async getCity(cityId) {
    try {
      const res = await this.cityRepository.getCity(cityId);
      return res;
    } catch (error) {
      throw { error };
    }
  }

  async createCity({ name }) {
    try {
      const res = await this.cityRepository.createCity({ name });
      return res;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    console.log("got the data");
    try {
      const res = await this.cityRepository.deleteCity(cityId);
      return res;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const res = await this.cityRepository.updateCity(cityId, data);
      return res;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityService;
