exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('authors_books', function(table) {
      table.integer('author_id', 11).unsigned().references('col').inTable('authors').references('id');
      table.integer('book_id', 11).unsigned().references('col').inTable('books').references('id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('authors_books')
  ]);
};
