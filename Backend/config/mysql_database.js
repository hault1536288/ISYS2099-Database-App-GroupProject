const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  process.env.MYSQL_DB_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
)

module.exports = sequelize
