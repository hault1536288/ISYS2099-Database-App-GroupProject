const express = require('express')
const StaffHistory = require('../models/staffHistory.model')
const sequelize = require('../config/mysql_database')
const Staff = require('../models/staff.model')
const router = express.Router()

StaffHistory.belongsTo(Staff, { foreignKey: 'staffID' })

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Appoinment Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all staffHistories
router.get('/getStaffHistories', async (req, res) => {
  try {
    const staffHistories = await StaffHistory.findAll()
    res.json(staffHistories)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a staffHistory by ID
router.get('/getStaffHistory/:id', async (req, res) => {
  try {
    const staffHistory = await StaffHistory.findByPk(req.params.id)
    res.json(staffHistory)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new staffHistory
router.post('/addStaffHistory', async (req, res) => {
  try {
    const staffHistory = await StaffHistory.create({
      staffID: req.body.staffID,
      departmentID: req.body.departmentID,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    })
    res.json(staffHistory)
  } catch (err) {
    res.json({ message: err })
  }
})

// Update a staffHistory
router.put('/updateStaffHistory/:id', async (req, res) => {
  try {
    const staffHistory = await StaffHistory.findByPk(req.params.id)
    staffHistory.staffID = req.body.staffID
    staffHistory.departmentID = req.body.departmentID
    staffHistory.startDate = req.body.startDate
    staffHistory.endDate = req.body.endDate
    await staffHistory.save()
    res.json(staffHistory)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete a staffHistory
router.delete('/deleteStaffHistory/:id', async (req, res) => {
  try {
    const staffHistory = await StaffHistory.findByPk(req.params.id)
    await staffHistory.destroy()
    res.json({ message: 'StaffHistory deleted!' })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
