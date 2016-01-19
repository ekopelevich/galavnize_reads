exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('books', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('genre');
      table.text('description');
      table.text('cover_image');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('books')
  ]);
};
