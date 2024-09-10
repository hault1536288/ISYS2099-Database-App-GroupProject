const express = require('express')
const Schedule = require('../models/schedule.model')
const sequelize = require('../config/mysql_database')
const Staff = require('../models/staff.model')
const Appointment = require('../models/appointment.model')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Staff Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all schedules
router.get('/getSchedules', async (req, res) => {
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
router.get('/getSchedulesOfDoctors', async (req, res) => {
  try {
    const inputDateTime = new Date(
      req.body.date,
      req.body.startTime,
      req.body.endTime
    )

    const scheduleOfDoctors = await Schedule.findAll()

    const availableDoctors = []

    for (let i = 0; i < scheduleOfDoctors.length; i++) {
      if (inputDateTime !== scheduleOfDoctors) {
        availableDoctors.push(scheduleOfDoctors[i])
      }
      res.json(availableDoctors)
    }
  } catch (err) {}
})

// Get a schedule by staff

// Create a new schedule
router.post('/addSchedule', async (req, res) => {
  try {
    const schedule = await Schedule.create({
      staffID: req.body.staffID,
      departmentID: req.body.departmentID,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    })
    res.json(schedule)
  } catch (err) {
    res.json({ message: err })
  }
})

// Update a schedule
router.put('/updateSchedule/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findByPk(req.params.id)
    schedule.staffID = req.body.staffID
    schedule.departmentID = req.body.departmentID
    schedule.dayOfWeek = req.body.dayOfWeek
    schedule.startTime = req.body.startTime
    schedule.endTime = req.body.endTime
    await schedule.save()
    res.json(schedule)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete a schedule
router.delete('/deleteSchedule/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findByPk(req.params.id)
    await schedule.destroy()
    res.json({ message: 'Schedule deleted successfully' })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
