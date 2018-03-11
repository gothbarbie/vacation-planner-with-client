import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './Header'

describe('components/Layout/Header', () => {
  const props = {
    auth: null,
    history: {
      location: '/',
    },
  }
  const header = shallow(<Header {...props} />)

  it('renders', () => {
    expect(header).toMatchSnapshot()
  })

  describe('Logout-button', () => {
    it('exists if user is logged in', () => {
      header.setProps({
        auth: {},
      })
      const LogoutButton = header.find('ButtonLink')
      expect(LogoutButton.exists()).toBe(true)
    })

    it('does not exists if user is nog logged in', () => {
      header.setProps({
        auth: null,
      })
      const LogoutButton = header.find('ButtonLink')
      expect(LogoutButton.exists()).toBe(false)
    })
  })

  describe('Login-button', () => {
    it('renders if user is not logged in and location is not "/"', () => {
      header.setProps({
        auth: null,
        history: {
          location: '/schedule',
        },
      })
      const LoginButton = header.find('ButtonLink')
      console.log(LoginButton.text())
      expect(LoginButton.exists()).toBe(true)
      expect(LoginButton.text()).toEqual('Login')
    })
  })
})
