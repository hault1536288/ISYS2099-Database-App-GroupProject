const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Staff = require('./staff.model')

const Schedule = sequelize.define(
  'tb_schedule',
  {
    scheduleID: {
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
    dayOfWeek: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
)

module.exports = Schedule
