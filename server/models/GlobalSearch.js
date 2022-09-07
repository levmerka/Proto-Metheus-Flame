const { Schema, model } = require("mongoose");

const globalsearchSchema = new Schema({
  search: {
    type: String,
    required: true,
  },
});

const GlobalSearch = model("globalsearch", globalsearchSchema);

module.exports = GlobalSearch;
