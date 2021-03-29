odule.exports = (app) => {
    const books = require('../controllers/movie.controller.js');

    // Get all Books
   app.get('/movie', movies.getAll);

   // Get a single Book with bookId
   app.get('/movie/:movieId', movies.getById);
}