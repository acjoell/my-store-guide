const { Pool } = require('pg')
const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PSWD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PSWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI })

module.exports = pool;