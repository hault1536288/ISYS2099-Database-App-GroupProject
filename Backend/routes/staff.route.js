const express = require('express')
const Staff = require('../models/staff.model')
const sequelize = require('../config/mysql_database')
const Appointment = require('../models/appointment.model')
const Treatment = require('../models/treatment.model')
const Department = require('../models/department.model')
const StaffHistory = require('../models/staffHistory.model')
const Schedule = require('../models/schedule.model')
const router = express.Router()

Staff.hasOne(Appointment, { foreignKey: 'staffID' })
Staff.hasOne(Treatment, { foreignKey: 'staffID' })
Staff.hasOne(Department, { foreignKey: 'staffID' })
Staff.hasOne(StaffHistory, { foreignKey: 'staffID' })
Staff.hasOne(Schedule, { foreignKey: 'staffID' })

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Staff Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all staff
router.get('/getStaffs', async (req, res) => {
  try {
    const staff = await Staff.findAll()
    res.json(staff)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a staff by ID
router.get('/getStaff/:id', async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id)
    res.json(staff)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a staff by name
router.get('/getStaffByName/:name', async (req, res) => {
  try {
    const staff = await Staff.findOne({ where: { name: req.params.name } })
    res.json(staff)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new staff
router.post('/addStaff', async (req, res) => {
  try {
    const staff = await Staff.create({
      departmentID: req.body.departmentID,
      groupManagerID: req.body.groupManagerID,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      birthDate: req.body.birthDate,
      jobTitle: req.body.jobTitle,
      salary: req.body.salary,
    })
    res.json(staff)
  } catch (err) {
    res.json({ message: err })
  }
})

// Update a staff
router.put('/updateStaff/:id', async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id)
    staff.departmentID = req.body.departmentID
    staff.groupManagerID = req.body.groupManagerID
    staff.name = req.body.name
    staff.email = req.body.email
    staff.phone = req.body.phone
    staff.address = req.body.address
    staff.birthDate = req.body.birthDate
    staff.jobTitle = req.body.jobTitle
    staff.salary = req.body.salary
    await staff.save()
    res.json(staff)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete a staff
router.delete('/deleteStaff/:id', async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id)
    await staff.destroy()
    res.json({ message: 'Staff deleted successfully' })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
