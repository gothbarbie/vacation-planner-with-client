import React from 'react'
import { shallow } from 'enzyme'

import { Schedule } from './Schedule'

describe('views/Schedule', () => {
  const props = {
    data: {
      vacations: [],
      loading: false,
    },
    auth: {},
    date: [],
    history: {},
    createVacation: jest.fn(),
    mutate: jest.fn(),

  }
  const schedule = shallow(<Schedule {...props} />)

  it('renders', () => {
    expect(schedule).toMatchSnapshot()
  })
})
