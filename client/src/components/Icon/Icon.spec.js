import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

describe('views/Schedule', () => {
  const icon = shallow(<Icon />)

  it('renders', () => {
    expect(icon).toMatchSnapshot()
  })
})
