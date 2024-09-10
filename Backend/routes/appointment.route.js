const express = require('express')
const Appointment = require('../models/appointment.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()
const Patient = require('../models/patient.model')
const Staff = require('../models/staff.model')
const Schedule = require('../models/schedule.model')

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

// Create a new appointment for a patient with associated staff
router.post('/addAppointment/:patientId/:staffId', async (req, res) => {
  try {
    const appointment = await Appointment.create({
      patientID: req.params.patientId,
      staffID: req.params.staffId,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    })

    const schedule = await Schedule.create({
      staffID: req.params.staffId,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    })

    res.json('Appointment created successfully')
  } catch (err) {
    res.json({ message: err })
  }
})

// Book an appointment with a

// Update an appointment
router.put('/updateAppointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id)
    appointment.patientID = req.body.patientID
    appointment.staffID = req.body.staffID
    appointment.dayOfWeek = req.body.dayOfWeek
    appointment.startTime = req.body.startTime
    appointment.endTime = req.body.endTime
    await appointment.save()
    res.json(appointment)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete an appointment
router.delete('/deleteAppointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id)
    await appointment.destroy()
    res.json({ message: 'Appointment deleted successfully' })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
