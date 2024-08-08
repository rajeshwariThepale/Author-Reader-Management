const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    username: { type: String, required: true, unique: true },
    email:{ type: String, required: true},
    password: { type: String, required: true },
        
});
  
const Authors = mongoose.model('author', authorSchema);
module.exports = Authors;