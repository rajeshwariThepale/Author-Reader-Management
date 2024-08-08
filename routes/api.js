const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookcontroller');
const reviewsController = require('../controller/reviewController');
const userController = require('../controller/userController');

//books apis
router.post('/books', bookController.addBooks);
router.get('/allBooks',bookController.getAllBooks);
router.put('/books/:id', bookController.updateBooksById)
router.delete('/book/:id', bookController.deleteBooksById);

//review apis
router.post('/books/:id/reviews',reviewsController.addReviews);
router.get('/books/:id/reviews',reviewsController.getReviewsByBookId);

//user apis
router.post('/register',userController.registerData);
router.post('/login',userController.loginData);

module.exports = router;