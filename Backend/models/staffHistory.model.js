const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Staff = require('./staff.model')

const StaffHistory = sequelize.define('tb_staffHistory', {
  historyID: {
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
  changedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  attributeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  oldValue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  newValue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  changedByStaffID: {
    type: DataTypes.INTEGER,
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

module.exports = StaffHistory
