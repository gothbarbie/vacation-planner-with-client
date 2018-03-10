import { FLASH_MESSAGE, FLASH_RESET } from '../../actions/types'

export default function (state = null, action) {
  switch (action.type) {
    case FLASH_MESSAGE:
      return action.payload

    case FLASH_RESET:
      return null

    default:
      return state
  }
}
