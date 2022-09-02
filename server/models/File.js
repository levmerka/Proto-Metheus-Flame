const { Schema, model } = require('mongoose');

const fileSchema = new Schema({
    text: {
        type: String,
        required: true,
    }
});

const File = model('File', fileSchema);

module.exports = File;