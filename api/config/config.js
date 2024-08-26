const config = {
  env: process.env.NODE_ENV || 'dev',
  dbUser: process.env.PG_USER,
  dbPassword: process.env.PG_PASSWORD,
  dbHost: process.env.PG_HOST,
  dbPort: process.env.PG_PORT,
  dbName: process.env.PG_NAME,
}

module.exports = { config }