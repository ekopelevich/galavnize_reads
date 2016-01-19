var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

router.get('/', function(req, res) {
  knex.select('books.name as title',
              'books.genre',
              'books.description',
              'authors.name')
    .from('books')
    .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
    .innerJoin('authors', 'authors.id', 'authors_books.author_id')
  //knex('books').select()
    .then(function(books){
      console.log(books);
      res.status(200)
        .render('books', { title: 'Books', books: books});
  });
});

router.get('/:id', function(req, res){
    knex('books').select()
        .where('id', req.params.id)
        .then(function(books){
            res.status(200).send({books: books});
    });
});

module.exports = router;
