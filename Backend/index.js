const express = require('express')
const app = express()
const mysql = require('mysql')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const port = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
const patientRoutes = require('./routes/patient.route')
const staffRoutes = require('./routes/staff.route')
const appointmentRoutes = require('./routes/appointment.route')
const treatmentRoutes = require('./routes/treatment.route')
const departmentRoutes = require('./routes/department.route')
const scheduleRoutes = require('./routes/schedule.route')
const staffHistoryRoutes = require('./routes/staffHistory.route')

// Use the routes
app.use('/api/staffHistory', staffHistoryRoutes)
app.use('/api/schedule', scheduleRoutes)
app.use('/api/appointment', appointmentRoutes)
app.use('/api/treatment', treatmentRoutes)
app.use('/api/department', departmentRoutes)
app.use('/api/patient', patientRoutes)
app.use('/api/staff', staffRoutes)

// Listen to a specified port
app.listen(3000, () => {
  console.log(`Server started at ${port}`)
})

// MySQL Connection
// mysql.createConnection(
//   {
//     host: 'localhost',
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//   },
//   () => {
//     console.log('MySQL Connection Established!')
//   }
// )

// MongoDB Connection
async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB Connection Established!')
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
  }
}

connectToMongoDB()
