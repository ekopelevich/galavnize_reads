var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js');
var knex = require('knex')(config[environment]);
module.exports = knex;
