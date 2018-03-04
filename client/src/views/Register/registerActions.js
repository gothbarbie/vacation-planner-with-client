import axios from 'axios'

import { REGISTER_USER } from './registerTypes'


export const registerUser = (formValues) => async dispatch => {

  console.log('registerUser', formValues)

  const res = await axios.post('/auth/email', {
    email: formValues.email.value,
    firstName: formValues.firstName.value,
    lastName: formValues.lastName.value,
    password: formValues.password.value,
    'passwordConfirm': formValues.passwordConfirm.value,
  })

  dispatch({
    type: REGISTER_USER,
    payload: res.data,
  })
}
