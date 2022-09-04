const { User, File } = require('../models');

const resolvers = {
  Query: {
    text: async () => {
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
