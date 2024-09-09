const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Patient = require('./patient.model')
const Staff = require('./staff.model')

const Treatment = sequelize.define('tb_treatment', {
  treatmentID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patientID: {
    type: DataTypes.INTEGER,
    references: {
      model: Patient,
      key: 'patientID',
    },
  },
  staffID: {
    type: DataTypes.INTEGER,
    references: {
      model: Staff,
      key: 'staffID',
    },
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

module.exports = Treatment
