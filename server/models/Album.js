const  { Schema, model } = require('mongoose')

const albumSchema = new Schema({
  artistname: {
    type: String,
    required: true,
  },
   
  
});

 const Album = model('Album', albumSchema);

 module.exports = Album