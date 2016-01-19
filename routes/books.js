var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

router.get('/', function(req, res) {
  // knex('books').select('authors.name', 'books.*').then(function(books){
  knex('books').select().then(function(books){
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
