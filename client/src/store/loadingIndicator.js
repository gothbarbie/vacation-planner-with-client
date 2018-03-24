import { createAction, handleActions } from 'redux-actions'

export const LOADING_INDICATOR_NAME = 'loading-indicator/NAME'
export const LOADING_INDICATOR_RESET = 'loading-indicator/RESET_SENDING'

export const loadingIndicatorName = createAction(LOADING_INDICATOR_NAME)
export const resetLoadingIndicator = createAction(LOADING_INDICATOR_RESET)

const initialState = {
  name: '',
}

export default handleActions(
  {
    [LOADING_INDICATOR_NAME]: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    [LOADING_INDICATOR_RESET]: () => initialState,
  },
  initialState
)
