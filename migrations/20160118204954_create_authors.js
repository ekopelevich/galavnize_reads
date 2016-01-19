exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('authors', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.text('bio');
      table.text('profile_image');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('authors')
  ]);
};
