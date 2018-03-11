const mongoose = require('mongoose')
const Vacation = mongoose.model('vacations')

exports.createVacation = async (req, res) => {
  req.sanitizeBody('arrival')
  req.sanitizeBody('departure')
  req.checkBody('arrival', 'Must be a date').isDate()
  req.checkBody('departure', 'Must be a date').isDate()

  const errors = req.validationErrors()
  if (errors) {
    return res.send([ errors ])
  }

  const vacation = new Vacation({
    arrival: req.body.arrival, 
    departure: req.body.departure,
    people: req.body.people, 
    author: req.body.author,
  })

  await vacation.save()

  res.send(vacation._id)
}
