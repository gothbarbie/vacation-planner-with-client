import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './Header'

describe('components/Layout/Header', () => {
  const props = {
    data: { auth: null },
    history: {
      location: '/',
    },
  }
  const header = shallow(<Header {...props} />)

  it('renders', () => {
    expect(header).toMatchSnapshot()
  })

  describe('Logout-button', () => {
    xit('exists if user is logged in', () => {
      header.setProps({
        data: { auth: {} },
      })
      const LogoutButton = header.find('ButtonLink')
      expect(LogoutButton.exists()).toBe(true)
    })

    xit('does not exists if user is not logged in', () => {
      header.setProps({
        data: { auth: null },
      })
      const LogoutButton = header.find('ButtonLink')
      expect(LogoutButton.exists()).toBe(false)
    })
  })

  describe('Login-button', () => {
    it('renders if user is not logged in and location is not "/"', () => {
      header.setProps({
        data: { auth: null },
        history: {
          location: '/schedule',
        },
      })
      const LoginButton = header.find('ButtonLink')
      expect(LoginButton.exists()).toBe(true)
    })
  })
})
