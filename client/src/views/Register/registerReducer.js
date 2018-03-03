import { REGISTER_USER } from './registerTypes'

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload
    default:
      return state
  }
}
