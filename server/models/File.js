const { Schema, model } = require("mongoose");

const fileSchema = new Schema({
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
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },

});

const File = model("File", fileSchema);

module.exports = File;
