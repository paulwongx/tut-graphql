const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

// Note: MongoDB automatically creates a unique ID for each item so no need to define it

module.exports = mongoose.model('Book', bookSchema); // model is a collection in mongodb