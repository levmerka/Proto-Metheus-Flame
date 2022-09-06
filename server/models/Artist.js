const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  artistname: {
    type: String,
    required: true,
  },
});

const Artist = model("artist", artistSchema);

module.exports = Artist;
