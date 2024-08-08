const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({

    title:{
        type: String,
        required:true},
    authorId: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'Author',
        required:true},
    genre:{ 
        type: String,
        required:true},
    description: { 
        type: String,
         required: true},
    publicationDate: { 
        type: Date, 
        required: true},
    price: { 
        type: Number, 
        required: true},
    });

const books = mongoose.model('books', BookSchema);

module.exports = books;