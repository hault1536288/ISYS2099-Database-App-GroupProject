const mongoose = require('mongoose')

const doctorNote = new mongoose.Schema(
  {
    doctorNoteId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('DoctorNote', doctorNote)
