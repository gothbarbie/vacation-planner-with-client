import dateReducer from './dateReducer'
import { SET_DATE } from '../actions/types'

describe('reducers/dateReducer', () => {
  const RealDate = Date

  function mockDate (isoDate) {
    global.Date = class extends RealDate {
      constructor () {
        return new RealDate(isoDate)
      }
    }
  }

  afterEach(() => {
    global.Date = RealDate
  })

  it('returns current date as default', () => {
    mockDate('2017-11-25T12:34:56z')
    expect(dateReducer(undefined, {})).toEqual(new Date())
  })

  it('sets a date', () => {
    const date = new Date(1984, 2, 2)
    expect(
      dateReducer(undefined, {
        type: SET_DATE,
        payload: date,
      })
    ).toEqual(date)
  })
})
