module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/cosmetics_store'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    },
  }