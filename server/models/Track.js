const { Schema, model } = require("mongoose");
const Genres = require("./Genres");

const trackSchema = new Schema({
  songname: {
    type: String,
    required: true,
  },
  artistname: {
    type: String,
    required: false,
  },
  albumname: {
    type: String,
    required: false,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genres',
    required: false,
  },
  text: {
    type: String,
    required: false,
  },

});

const Track = model("Track", trackSchema);

module.exports = Track;
