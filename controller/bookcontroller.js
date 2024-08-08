const Books = require('../models/Book');

const addBooks = async (req,res) => {
    const { title, authorId, genre } = req.body;
    
    try{
        const newBook = new Books({ title, authorId, genre });
        await newBook.save();
        res.status(200).send(newBook);

    } catch(error){
        res.status(500).send('server error');
    }

};

const getAllBooks = async (req,res) => {
    try{
        const AllBooks = await Books.find({},{__v:0});
        res.status(200).send(AllBooks);
        
    } catch(error){
        res.status(200).send('server error');
    }

};

const updateBooksById = async (req, res) => {
    const { title, authorId, genre } = req.body;
    const {id}=req.params;
    try{
        const updatedBook = await Books.findByIdAndUpdate(id);

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
            }
            updatedBook.title = title || updatedBook.title;
            updatedBook.authorId = authorId || updatedBook.authorId;
            updatedBook.genre = genre || updatedBook.genre;

        res.status(200).send({message:"Book updated successfully",updatedBook});
    } catch(error){
        res.status(500).send('server error');
    }
}

const deleteBooksById = async (req,res) => {

    try{
        const deletedBook = await Books.findByIdAndDelete(req.params.id)
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
          }
          res.json({ message: 'Book deleted successfully' });
    } catch(error){
        res.status(500).send('server error');
    }

}



module.exports = {addBooks, getAllBooks, updateBooksById,deleteBooksById}