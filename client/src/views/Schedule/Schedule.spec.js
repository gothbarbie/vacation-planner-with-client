import React from 'react'
import { shallow } from 'enzyme'

import { Schedule } from './Schedule'

describe('views/Schedule', () => {
  const props = {
    auth: {},
    date: [],
  }
  const schedule = shallow(<Schedule {...props} />)

  it('renders', () => {
    expect(schedule).toMatchSnapshot()
  })
})
