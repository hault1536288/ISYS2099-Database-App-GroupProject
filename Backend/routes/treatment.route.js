const express = require('express')
const Treatment = require('../models/treatment.model')
const sequelize = require('../config/mysql_database')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Appoinment Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all treatments
router.get('/getTreatments', async (req, res) => {
  try {
    const treatments = await Treatment.findAll()
    res.json(treatments)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a treatment by ID
router.get('/getTreatment/:id', async (req, res) => {
  try {
    const treatment = await Treatment.findByPk(req.params.id)
    res.json(treatment)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new treatment
router.post('/addTreatment', async (req, res) => {
  try {
    const treatment = await Treatment.create({
      patientID: req.body.patientID,
      staffID: req.body.staffID,
    })
    res.json(treatment)
  } catch (err) {
    res.json({ message: err })
  }
})

// Update a treatment
router.put('/updateTreatment/:id', async (req, res) => {
  try {
    const treatment = await Treatment.findByPk(req.params.id)
    treatment.patientID = req.body.patientID
    treatment.staffID = req.body.staffID
    await treatment.save()
    res.json(treatment)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete a treatment
router.delete('/deleteTreatment/:id', async (req, res) => {
  try {
    const treatment = await Treatment.findByPk(req.params.id)
    await treatment.destroy()
    res.json('Treatment deleted')
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
