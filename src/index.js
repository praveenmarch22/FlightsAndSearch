const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const StartTheServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({ name: "delhi" });
  });
};

StartTheServer();
