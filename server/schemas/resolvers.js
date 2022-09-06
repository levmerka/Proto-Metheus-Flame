const { User, Track } = require("../models");

const resolvers = {
  Query: {
    songname: async () => {
      return Track.find({});
    },
    // username: async () => {
    //   return User.find({}).populate('library');
    // },
    artistname: async () => {
      return Track.find({});
    },
    albumname: async () => {
      return Track.find({});
    },
    genre: async () => {
      return Track.find({});
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
