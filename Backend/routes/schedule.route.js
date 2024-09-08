const express = require('express')
const Schedule = require('../models/schedule.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Staff Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all schedules
router.get('/getSchedule', async (req, res) => {
  try {
    const schedule = await Schedule.findAll()
    res.json(schedule)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a schedule by ID
router.get('/getSchedule/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findByPk(req.params.id)
    res.json(schedule)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a schedule by staff
router.get('/getScheduleByStaff/:staffID', async (req, res) => {
  try {
    const schedule = await Schedule.findAll({
      where: { staffID: req.params.staffID },
    })
    res.json(schedule)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new schedule
router.post('/addSchedule', async (req, res) => {
  try {
    const schedule = await Schedule.create({
      staffID: req.body.staffID,
      departmentID: req.body.departmentID,
      day: req.body.day,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    })
    res.json(schedule)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
