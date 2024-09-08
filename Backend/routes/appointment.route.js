const express = require('express')
const Appointment = require('../models/appointment.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Appoinment Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all appointments
router.get('/getAppointments', async (req, res) => {
  try {
    const appointments = await Appointment.findAll()
    res.json(appointments)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get an appointment by ID
router.get('/getAppointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id)
    res.json(appointment)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new appointment
router.post('/addAppointment', async (req, res) => {
  try {
    const appointment = await Appointment.create({
      patientID: req.body.patientID,
      staffID: req.body.staffID,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    })
    res.json(appointment)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
