exports.seed = function(knex, Promise) {
  return knex('authors_books').del().then(function(){
    return Promise.all([
      knex('authors_books').insert({
        author_id: 1,
        book_id: 4
      }),
      knex('authors_books').insert({
        author_id: 1,
        book_id: 5
      }),
      knex('authors_books').insert({
        author_id: 1,
        book_id: 6
      }),
      knex('authors_books').insert({
        author_id: 2,
        book_id: 1
      }),
      knex('authors_books').insert({
        author_id: 5,
        book_id: 1
      }),
      knex('authors_books').insert({
        author_id: 3,
        book_id: 2
      }),
      knex('authors_books').insert({
        author_id: 4,
        book_id: 3
      }),
    ]);
  });
};
