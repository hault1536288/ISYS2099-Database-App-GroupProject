const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Patient = require('./patient.model')

const Treatment = sequelize.define('tb_treatment', {
  treatmentID: {
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
    foreignKey: true,
    references: {
      model: 'staff',
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

Treatment.belongsTo(Patient, { foreignKey: 'patientID' })

module.exports = Treatment
