import axios from 'axios'

import { FETCH_USER, FLASH_MESSAGE } from '../../actions/types'

export const loginUser = ({ email, password }) => async dispatch => {
  try {
    const res = await axios.post('/auth/login', {
      email,
      password,
    })

    dispatch({
      type: FETCH_USER,
      payload: res.data,
    })

    const payload = {
      type: 'success',
      message: 'You are now logged in!',
    }
    dispatch({
      type: FLASH_MESSAGE,
      payload,
    })
  } catch (error) {
    const payload = {
      type: 'danger',
      message: error,
    }
    dispatch({
      type: FLASH_MESSAGE,
      payload,
    })
  }
}
