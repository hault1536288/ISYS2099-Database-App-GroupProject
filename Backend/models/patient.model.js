const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Treatment = require('./treatment.model')
const Appointment = require('./appointment.model')

const Patient = sequelize.define(
  'tb_patient',
  {
    patientID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    treatmentID: {
      type: DataTypes.INTEGER,
      references: {
        model: Treatment,
        key: 'treatmentID',
      },
    },
    appoinmentID: {
      type: DataTypes.INTEGER,
      references: {
        model: Appointment,
        key: 'treatmentID',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    allergy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
)

module.exports = Patient
