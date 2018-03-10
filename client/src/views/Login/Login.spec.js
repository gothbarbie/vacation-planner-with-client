import React from 'react'
import { shallow } from 'enzyme'

import { Login } from './Login'

describe('views/Login', () => {
  const login = shallow(<Login />)

  it('renders', () => {
    expect(login).toMatchSnapshot()
  })
})
