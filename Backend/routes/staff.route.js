const express = require('express')
const Staff = require('../models/staff.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Staff Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all staff
router.get('/getStaff', async (req, res) => {
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

module.exports = router
