const mongoose = require('mongoose')

const diagnosticImagesSchema = new mongoose.Schema({
  diagImgId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('DiagnosticImages', diagnosticImagesSchema)
