module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/greadsdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
