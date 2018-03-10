import React from 'react'
import { shallow } from 'enzyme'

import { Register } from './Register'

describe('views/Register', () => {
  const register = shallow(<Register />)

  it('renders', () => {
    expect(register).toMatchSnapshot()
  })
})
