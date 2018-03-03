import { REGISTER_USER } from './registerTypes'

export const registerUser = (user) => async dispatch => {

  console.log('registerUser', user)

  dispatch({
    type: REGISTER_USER, 
    payload: {},
  })
}
