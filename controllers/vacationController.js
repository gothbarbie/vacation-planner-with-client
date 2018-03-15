const mongoose = require('mongoose')
const Vacation = mongoose.model('vacations')
const { checkSchema, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

exports.create = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() })
  }
  const body = matchedData(req)

  console.log(req.auth)

  const vacation = new Vacation({
    arrival: body.arrival,
    departure: body.departure,
    people: body.people,
    author: req.user._id,
  })

  await vacation.save()

  return res.send(vacation._id)
}

exports.validate = checkSchema({
  arrival: {
    errorMessage: 'Arrival is wrong',
    isISO8601: true,
  },
  departure: {
    errorMessage: 'Arrival is wrong',
    isISO8601: true,
  },
  people: {
    errorMessage: 'People is missing!',
    exists: true
  }
})
