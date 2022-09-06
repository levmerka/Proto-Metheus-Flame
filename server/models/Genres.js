const  { Schema, model } = require('mongoose')

const genresSchema = new Schema({
  genrename: {
    type: String,
    required: true,
  },
   
  
});

 const Genres = model('genres', genresSchema);

 module.exports = Genres