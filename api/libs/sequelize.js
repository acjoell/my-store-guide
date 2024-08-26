const { Sequelize } = require('sequelize');
const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PSWD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PSWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
})

module.exports = sequelize