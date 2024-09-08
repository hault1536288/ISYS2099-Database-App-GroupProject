const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Staff = require('./staff.model')

const Schedule = sequelize.define('tb_schedule', {
  scheduleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  staffID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tb_staff',
      key: 'staffID',
    },
  },
  dayOfWeek: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
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

Schedule.belongsTo(Staff, { foreignKey: 'staffID' })

module.exports = Schedule
