const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')

const Treatment = sequelize.define(
  'tb_treatment',
  {
    treatmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { freezeTableName: true, timestamps: true }
)

module.exports = Treatment
