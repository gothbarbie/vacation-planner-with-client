const mongoose = require('mongoose')

const vacationSchema = new mongoose.Schema({
  arrival: {
    type: Date,
    required: 'Date of arrival is required.',
  },
  departure: {
    type: Date,
    required: 'Date of departure is required.',
  },
  people: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: 'At least one participant is required.'
  }],
  created: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: 'Author is required.'
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

function autoPopulate(next) {
  this.populate('people')
  next()
}

vacationSchema.pre('find', autoPopulate)
vacationSchema.pre('findOne', autoPopulate)

module.exports = mongoose.model('vacations', vacationSchema)
