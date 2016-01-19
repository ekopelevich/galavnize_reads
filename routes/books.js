var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

router.get('/', function(req, res) {
  knex.select('books.name as title',
              'books.genre',
              'books.description',
              'authors.name',
              'books.cover_image')
    .from('books')
    .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
    .innerJoin('authors', 'authors.id', 'authors_books.author_id')
    .then(function(books){
      console.log(books.cover_image);
      res.status(200)
        .render('books', { title: 'Books', books: books});
  });
});

router.get('/new', function(req, res){
  res.render('new_book', { title: 'Add a Book' });
});

router.get('/:id', function(req, res){
  knex('books').select()
    .where('id', req.params.id)
    .then(function(books){
      res.status(200).send({books: books});
  });
});

router.post('/', function(req, res){
  var title = req.body.title;
  var author = req.body.author;
  var genre = req.body.genre;
  var description = req.body.description;
  var image = req.body.cover_image;
  if (authorExists(author)) {
    var id = authorExists(author);
  }
  if (titleExists(title)) {
    throw 'error';
  }

  knex('books').insert({
    name: title,
    author: author,
    genre: genre,
    description: description,
    cover_image: image
  }, 'id').then(function(id){
    req.body.id = id[0];
    res.status( 201 ).send( req.body );
  });
  console.log(req.body);

});

function authorExists(author) {
  var id = knex.select('id').from('author').where({'name': author_name});
  if (id > 0) {
    return id;
  } else {

  }
}

// function titleExists(title) {
//
//   return ???;
// }

module.exports = router;
