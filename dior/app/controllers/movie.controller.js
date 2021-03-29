const Movie= require('../models/book.movie.js');

// Get all and return all books.
exports.getAll = (req, res) => {
    Movie.find()
        .then(oMovie => {
            res.send(oMovie);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the book."
        });
    });
 };

 // Get a single movie with a title
exports.getByTitle = (req, res) => {
   Movie.findByTitle(req.params.title)
       .then(oMovie => {
           if(oMovie) {
               res.send(oMovie);
           }
           return res.status(404).send({
               message: "Movie does not exist with title " + req.params.title
           });
       }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Movie does not exist with title " + req.params.title
           });
       }
       return res.status(500).send({
           message: "Error retrieving book with id " + req.params.title
       });
   });
};