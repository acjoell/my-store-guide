const { Client } = require('pg')
const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PSWD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PSWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

async function getConnection() {
  const client = new Client({ connectionString: URI })
  try {
    await client.connect();
  } catch (e) {
    console.error('---> Connection error:', e.stack);
  }
  return client
}

module.exports = getConnection;