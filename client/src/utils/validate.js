import validator from 'is-my-json-valid'

// Validation

/* 

const fieldsAndValues = [
  {
    email: 'email@mail.com'
  },
  {
    firstName: 'Hanna'
  },
]

return const errors = [
  {
    field: 'email',
    errors: [
      'Cannot be empty',
      'Must be a valid email',
    ]
  }
]

const validate = (fieldsAndValues: array) => {
  errors = fieldsAndValues.map(e => {
    errors[key].push = 
  })

for (var k in target){
  if (target.hasOwnProperty(k)) {
    console.log("Key is " + k + ", value is" + target[k])
  }
}

 */

// @flow

const validate = (fieldsAndValues: Object) => {
  const errors = {}

  Object.entries(fieldsAndValues).forEach(e => {
    if (e[0] === 'firstName' && e[1].length < 1) {
      errors.firstName = 'Must be at least one character.'
    }

    // if (e[0] === 'lastName' && e[1].length < 1) {
    //   errors.push({ [e[0]]: 'Must be at least one character.' })
    // }
  })

  return errors
}

export default validate
