const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_NAME,
  })
  try {
    await client.connect();
  } catch (e) {
    console.error('---> Connection error:', e.stack);
  }
  return client
}

module.exports = getConnection;