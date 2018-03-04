import axios from 'axios'

import { FLASH_MESSAGE, FETCH_USER } from '../../actions/types'

export const registerUser = formValues => async dispatch => {
  try {
    const res = await axios.post('/auth/email', {
      email: formValues.email.value,
      firstName: formValues.firstName.value,
      lastName: formValues.lastName.value,
      password: formValues.password.value,
      passwordConfirm: formValues.passwordConfirm.value,
    })

    dispatch({
      type: FETCH_USER,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: FLASH_MESSAGE,
      payload: {
        type: 'danger',
        message: error,
      },
    })
  }
}
