const express = require('express')
const Patient = require('../models/patient.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Database & tables created!')
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

module.exports = router
