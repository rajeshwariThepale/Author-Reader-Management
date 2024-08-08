const Reviews = require('../models/reviews');
const Book = require('../models/Book');

const addReviews = async (req, res) => {
    
    // const { bookId} = req.params;
    const {bookId, description ,rating} = req.body;
    try{
        const newReview = new Reviews({bookId, description, rating });
         await newReview.save();
        res.status(201).send(newReview);
    } catch(err){
        res.status(500).send(err);
    }
} 

const getReviewsByBookId = async (req, res) => {
    const { bookId} = req.params.id;
    try{
        const bookReviews = await Reviews.findOne({ObjectId: bookId});
        if (!bookReviews) {
            return res.status(404).json({ message: 'Book not found' });
        } 
        const allReviews = await Reviews.find({ObjectId: bookId});
        res.send(allReviews);

    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports ={
    addReviews,
    getReviewsByBookId
}