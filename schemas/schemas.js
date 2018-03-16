const { email } = require('is-my-json-valid/formats')

exports.registerUser = {
  required: true,
  type: 'object',
  properties: {
    email: {
      required: true,
      type: email,
    },
    password: {
      required: true,
      type: 'string',
    }
  },
}

