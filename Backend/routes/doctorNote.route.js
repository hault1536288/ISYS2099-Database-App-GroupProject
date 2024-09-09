const { DoctorNote } = require('../models/doctorNote.model')
const express = require('express')
const router = express.Router()

// Get all doctor notes
router.get('/getDoctorNotes', async (req, res) => {
  try {
    const doctorNotes = await DoctorNote.find()
    res.json(doctorNotes)
  } catch (err) {
    res.json({ message: err })
  }
})
