import dateReducer from './dateReducer'
import { SET_DATE } from '../actions/types'

describe('reducers/dateReducer', () => {
  it('returns current date as default', () => {
    const date = new Date()
    expect(dateReducer(undefined, {})).toEqual(date)
  })
  
  it('sets a date', () => {
    const date = new Date(1984, 2, 2)
    expect(dateReducer(undefined, {
      type: SET_DATE,
      payload: date,
    })).toEqual(date)
  })
})
