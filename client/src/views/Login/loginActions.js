import axios from 'axios'

import { FETCH_USER } from '../../actions/types'

export const loginUser = ({ email, password }) => async dispatch => {
  const res = await axios.post('/auth/login', {
    email,
    password,
  })

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
}
