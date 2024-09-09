const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Staff = require('./staff.model')

const Department = sequelize.define('tb_department', {
  departmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  staffID: {
    type: DataTypes.INTEGER,
    references: {
      model: Staff,
      key: 'staffID',
    },
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
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
})

module.exports = Department
