import axios from 'axios'

import { CREATE_VACATION, FLASH_MESSAGE } from '../../actions/types'

export const createVacation = ({
  arrival,
  departure,
  people,
}) => async dispatch => {
  try {
    const res = await axios.post('/api/vacation/create', {
      arrival,
      departure,
      people,
    })
    dispatch({
      type: CREATE_VACATION,
      payload: res.data,
    })
  } catch (error) {
    const payload = {
      type: 'danger',
      message: 'Could not save new trip.',
    }
    dispatch({
      type: FLASH_MESSAGE,
      payload,
    })
  }
}
