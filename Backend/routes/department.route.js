const express = require('express')
const Department = require('../models/department.model')
const sequelize = require('../config/mysql_database')
const Staff = require('../models/staff.model')
const router = express.Router()

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Appoinment Database & tables created!')
  })
  .catch((err) => console.log('Unable to create tables: ', err))

// Get all departments
router.get('/getDepartments', async (req, res) => {
  try {
    const departments = await Department.findAll()
    res.json(departments)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get a department by ID
router.get('/getDepartment/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id)
    res.json(department)
  } catch (err) {
    res.json({ message: err })
  }
})

// Create a new department
router.post('/addDepartment', async (req, res) => {
  try {
    const department = await Department.create({
      managerID: req.body.managerID,
      name: req.body.name,
      description: req.body.description,
    })
    res.json(department)
  } catch (err) {
    res.json({ message: err })
  }
})

// Update a department
router.put('/updateDepartment/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id)
    department.managerID = req.body.managerID
    department.name = req.body.name
    department.description = req.body.description
    await department.save()
    res.json(department)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete a department
router.delete('/deleteDepartment/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id)
    await department.destroy()
    res.json({ message: 'Department deleted!' })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
