const db = require('../config/connection');
const { User, File } = require('../models');

const userData = require('./users.json');
const fileData = require('./files.json');

db.once('open', async () => {
  await User.deleteMany({});
  await File.deleteMany({});

  const userSeeds = await User.insertMany(userData);
  const fileSeeds = await File.insertMany(fileData);
    
  console.log('example files loaded.');
  process.exit(0);
});
