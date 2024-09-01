const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PSWD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PSWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
    "database": "database_development",
  },
  "test": {
    url: URI,
    dialect: 'postgres',
    //database: 'database_test',
  },
  "production": {
    url: URI,
    dialect: 'postgres',
    //database: 'database_production',
  }
}