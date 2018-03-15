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

  const vacation = new Vacation({
    arrival: body.arrival,
    departure: body.departure,
    people: body.people,
    author: req.user._id,
  })

  await vacation.save()

  return res.send(vacation)
}

exports.get = async (req, res, next) => {
  if (!req.param.id.match(/^[0-9a-fA-F]{24}$/)) return next()
  const vacation = await Vacation.findOne({ _id: req.param.id })

  if (!vacation) {
    res.status(400).send({ error: 'Not found' })
  }

  res.send(vacation)
}

exports.all = async (req, res, next) => {
  const vacations = await Vacation.find()

  if (!vacations) {
    res.status(400).send({ error: 'Not found' })
  }

  res.send(vacations)
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
    exists: true,
  },
})
