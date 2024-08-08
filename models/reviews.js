const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const reviewsSchema = Schema(
    {
        bookId: { 
            type: Schema.Types.ObjectId ,
            ref: 'Book',
            required: true},
        description: { 
            type: String, 
            required: true},
        rating: { 
            type: Number, 
            required: true,
            min: 1,
            max: 5, },
        
    });

   const reviews = mongoose.model('reviews', reviewsSchema);
    module.exports = reviews;

