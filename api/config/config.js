const config = {
  env: process.env.NODE_ENV || 'dev',
  dbUser: process.env.PG_USER || 'acjoell',
  dbPassword: process.env.PG_PASSWORD || 'admin123',
  dbHost: process.env.PG_HOST || '172.18.0.2',
  dbPort: process.env.PG_PORT || 5432,
  dbName: process.env.PG_NAME || 'my_store',
}

module.exports = { config }