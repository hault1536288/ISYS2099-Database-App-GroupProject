const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Patient = require('./patient.model')
const Staff = require('./staff.model')

const Appointment = sequelize.define('tb_appointment', {
  appointmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patientID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tb_patient',
      key: 'patientID',
    },
  },
  staffID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tb_staff',
      key: 'staffID',
    },
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

Appointment.belongsTo(Patient, { foreignKey: 'patientID' })
Appointment.belongsTo(Staff, { foreignKey: 'staffID' })
Patient.hasMany(Appointment, { foreignKey: 'patientID' })
Staff.hasMany(Appointment, { foreignKey: 'staffID' })

module.exports = Appointment
