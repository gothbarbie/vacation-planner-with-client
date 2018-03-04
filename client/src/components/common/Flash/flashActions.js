import { FLASH_RESET } from '../../../actions/types'

export const closeFlash = () => dispatch => {
  dispatch({
    type: FLASH_RESET,
  })
}
