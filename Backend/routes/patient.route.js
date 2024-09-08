const express = require('express')
const Patient = require('../models/patient.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Patient Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all patients
router.get('/getPatients', async (req, res) => {
  try {
    const patients = await Patient.findAll()
    res.json(patients)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a patient by ID
router.get('/getPatient/:id', async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id)
    res.json(patient)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a patient by name
router.get('/getPatientByName/:name', async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { name: req.params.name } })
    res.json(patient)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new patient
router.post('/addPatient', async (req, res) => {
  try {
    const patient = await Patient.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      birthDate: req.body.birthDate,
      allergy: req.body.allergy,
    })
    res.json(patient)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
