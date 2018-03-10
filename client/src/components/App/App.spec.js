import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

describe('App', () => {
  const mockFetchUser = jest.fn()
  const props = {
    fetchUser: mockFetchUser,
  }
  const app = shallow(<App {...props} />)

  it('renders', () => {
    expect(app).toMatchSnapshot()
  })
})
