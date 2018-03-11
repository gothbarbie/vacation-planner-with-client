import authReducer from './authReducer'
import { FETCH_USER } from '../actions/types'

describe('reducers/authReducer', () => {
  it('sets a fetched used', () => {
    const user = {

    }

    expect(authReducer(undefined, { type: FETCH_USER, payload: user })).toEqual(user)
  })

  it('returns false if no user is set', () => {
    expect(authReducer(undefined, { type: FETCH_USER })).toBe(false)
  })
})
