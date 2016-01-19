var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

router.get('/', function(req, res) {
  knex('authors').select().then(function(authors){
      res.status(200)
        .render('authors', { title: 'Authors', authors: authors});
  });
});

router.get('/:id', function(req, res){
    knex('authors').select()
        .where('id', req.params.id)
        .then(function(authors){
            res.status(200).send({authors: authors});
    });
});

module.exports = router;
