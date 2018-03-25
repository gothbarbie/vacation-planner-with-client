import React from 'react'
import { shallow } from 'enzyme'

import { Login } from './Login'

describe('views/Login', () => {
  const state = {
    email: {
      value: '',
      touched: false,
    },
    password: {
      value: '',
      touched: false,
    },
    errors: {
      email: '',
      password: '',
    },
  }

  const props = {
    data: { auth: null },
    loginUser: jest.fn(),
    history: {},
  }

  const login = shallow(<Login {...props} {...state} />)

  it('renders', () => {
    expect(login).toMatchSnapshot()
  })

  describe('#showErrors', () => {
    xit('returns errors for named field', () => {
      expect(login.showErrors('email')).toEqual()
    })
  })

})
