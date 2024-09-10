const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Appointment = require('./appointment.model')
const Treatment = require('./treatment.model')

const Patient = sequelize.define(
  'tb_patient',
  {
    patientID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

Patient.hasMany(Appointment, { foreignKey: 'patientID' })
Patient.hasMany(Treatment, { foreignKey: 'patientID' })

module.exports = Patient

// {
//   "patientID": 1,
//   "treatmentID": 1,
//   "appointmentID": 1,
//   "name": "John Doe",
//   "email": "johndoe@example.com",
//   "phone": "1234567890",
//   "address": "123 Main St",
//   "birthDate": "1990-01-01",
//   "allergy": "None"
// };
