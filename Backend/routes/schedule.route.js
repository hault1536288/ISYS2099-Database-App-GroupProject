const express = require('express')
const Schedule = require('../models/schedule.model')
const sequelize = require('../config/mysql_database')
const Staff = require('../models/staff.model')
const router = express.Router()

Schedule.belongsTo(Staff, { foreignKey: 'staffID' })

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

// Get a staff's schedule based on staff's appointment availability
router.get('/getStaffBySchedule', async (req, res) => {
  try {
    const staffAppointments = await Staff.findAll({
      include: {
        model: Appointment,
        where: {
          dayOfWeek: req.body.dayOfWeek,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
        },
      },
    })

    const staffSchedules = await Staff.findAll({
      include: {
        model: Schedule,
        where: {
          dayOfWeek: req.body.dayOfWeek,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
        },
      },
    })

    if (staffAppointments !== staffSchedules) {
      const availableDoctor = await Schedule.findAll({
        where: {
          dayOfWeek: req.body.dayOfWeek,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
        },
      })
      res.json(availableDoctor)
    }

    res.json({ message: 'No available doctor' })
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

// Get a schedule by staff

// Create a new schedule
router.post('/addSchedule', async (req, res) => {
  try {
    const schedule = await Schedule.create({
      staffID: req.body.staffID,
      departmentID: req.body.departmentID,
      dayOfWeek: req.body.dayOfWeek,
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
