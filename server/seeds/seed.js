const db = require("../config/connection");
const { User, Track } = require("../models");

const userData = require("./users.json");
const fileData = require("./files.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Track.deleteMany({});

  const userSeeds = await User.insertMany(userData);
  const trackSeeds = await Track.insertMany(fileData);

  console.log("example files loaded.");
  process.exit(0);
});
