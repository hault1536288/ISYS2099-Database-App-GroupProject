const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Staff = require('./staff.model')

const Department = sequelize.define(
  'tb_department',
  {
    departmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    managerID: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
)

module.exports = Department
