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
const patientRoutes = require('./routes/patient.routes')
app.use('/api', patientRoutes)

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
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('MongoDB Connection Established!')
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
  }
}

connectToMongoDB()
