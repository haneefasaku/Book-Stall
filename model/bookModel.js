const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    auther:String,
    description:String,
    thumbnail:String
  });

  const Book = mongoose.model('Book', bookSchema);

  module.exports = Book