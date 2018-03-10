import React from 'react'
import { shallow } from 'enzyme'

import { Flash } from './Flash'

describe('Flash', () => {
  const flash = shallow(<Flash />)
  
  it('renders', () => {
    expect(flash).toMatchSnapshot()
  })
})
