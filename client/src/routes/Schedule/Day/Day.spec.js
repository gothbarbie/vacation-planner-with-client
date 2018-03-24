import React from 'react'
import { shallow } from 'enzyme'
import Day from './Day'

describe('Day', () => {
  const day = shallow(<Day />)

  it('renders', () => {
    expect(day).toMatchSnapshot()
  })
})
