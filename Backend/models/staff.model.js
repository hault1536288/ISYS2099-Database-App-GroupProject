const { DataTypes } = require('sequelize')
const sequelize = require('../config/mysql_database')
const Department = require('./department.model')
const Appointment = require('./appointment.model')
const Schedule = require('./schedule.model')

const Staff = sequelize.define('tb_staff', {
  staffID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  departmentID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tb_department',
      key: 'departmentID',
    },
  },
  appoinmentID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tb_appointment',
      key: 'appointmentID',
    },
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
  jobTitle: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
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

Staff.hasOne(Appointment, { foreignKey: 'appoinmentID' })
Staff.hasOne(Department, { foreignKey: 'departmentID' })
Staff.hasMany(Schedule, { foreignKey: 'staffID' })
Department.hasMany(Staff, { foreignKey: 'staffID' })

module.exports = Staff
