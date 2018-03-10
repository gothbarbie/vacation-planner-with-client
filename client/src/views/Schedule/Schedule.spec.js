import React from 'react'
import { shallow } from 'enzyme'

import Schedule from './Schedule'

describe('views/Schedule', () => {
  const schedule = shallow(<Schedule />)

  it('renders', () => {
    expect(schedule).toMatchSnapshot()
  })
})
