const { User, Track, GlobalSearch, Artist, Album, Genres } = require("../models");

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
//     globalsearch: async () => {

// }    

  },

  Mutation : {
    addToLibrary: async (parent, args, context) => {
      const addToLibrary = await User.findOneAndUpdate(
        {_id: context.user._id},
        {$addToSet: {library: args.id}},
        {new:true},
      );
      return addToLibrary
    }
  }
};

module.exports = resolvers;
