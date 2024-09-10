const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')

const Appointment = sequelize.define(
  'tb_appointment',
  {
    appointmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
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

module.exports = Appointment

// {
//
//   "date": "Monday",
//   "startTime": "09:00:00",
//   "endTime": "10:00:00"
// }
