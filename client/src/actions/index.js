import axios from 'axios'

import { FETCH_USER, SET_DATE } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  // console.log('user', res.data)

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
}

export const setDate = date => dispatch => {
  dispatch({
    type: SET_DATE,
    payload: date,
  })
}
