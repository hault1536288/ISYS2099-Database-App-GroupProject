const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Department = require('./department.model')
const Appointment = require('./appointment.model')
const Schedule = require('./schedule.model')
const Treatment = require('./treatment.model')
const StaffHistory = require('./staffHistory.model')

const Staff = sequelize.define(
  'tb_staff',
  {
    staffID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    groupManagerID: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jobCategory: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    jobTitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
)

Staff.hasMany(Appointment, { foreignKey: 'staffID' })
Staff.hasMany(Schedule, { foreignKey: 'staffID' })
Staff.hasMany(StaffHistory, { foreignKey: 'staffID' })
Staff.hasOne(Department, { foreignKey: 'staffID' })
Staff.hasMany(Treatment, { foreignKey: 'staffID' })
Department.hasOne(Staff, { foreignKey: 'departmentID' })

module.exports = Staff

// {
//   "groupManagerID": 1,
//   "name": "John Doe",
//   "email": "johndoe@gmail.com",
//   "phone": "1234567890",
//   "address": "123 Main St, Houston, TX 77001",
//   "birthDate": "1990-01-01",
//   "jobCategory": "Doctor",
//   "jobTitle": "General Practitioner",
//   "salary": 100000
// }
