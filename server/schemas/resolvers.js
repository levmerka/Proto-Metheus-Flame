const { User, File } = require("../models");

const resolvers = {
  Query: {
    songname: async () => {
      return File.find({});
    },
    // username: async () => {
    //   return User.find({}).populate('library');
    // },
    artistname: async () => {
      return File.find({});
    },
    albumname: async () => {
      return File.find({});
    },
    genre: async () => {
      return File.find({});
    },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return User.find(params);
    // },
  },
  // Mutation: {
  //   createMatchup: async (parent, args) => {
  //     const matchup = await User.create(args);
  //     return matchup;
  //   },

  // },
};

module.exports = resolvers;
