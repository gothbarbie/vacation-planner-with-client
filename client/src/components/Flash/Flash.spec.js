import React from 'react'
import { shallow } from 'enzyme'

import { Flash } from './Flash'

describe('Flash', () => {
  const closeFlash = jest.fn()

  const props = {
    flash: {
      type: '',
      message: 'Default',
    },
    closeFlash,
  }
  const flash = shallow(<Flash {...props} />)

  it('renders (default)', () => {
    expect(flash).toMatchSnapshot()
  })

  it('renders (success)', () => {
    flash.setProps({
      flash: {
        type: 'success',
        message: 'Success!',
      },
    })
    expect(flash).toMatchSnapshot()
  })

  it('renders (danger)', () => {
    flash.setProps({
      flash: {
        type: 'danger',
        message: 'Danger!',
      },
    })
    expect(flash).toMatchSnapshot()
  })

  it('renders (warning)', () => {
    flash.setProps({
      flash: {
        type: 'warning',
        message: 'Warning!',
      },
    })
    expect(flash).toMatchSnapshot()
  })

  describe('#closeFlash', () => {
    it('calls closeFlash() on click', () => {
      flash.find('.flash').simulate('click')
      expect(closeFlash).toHaveBeenCalled()
    })

    it('stops rendering flash-component', () => {
      flash.setProps({
        flash: null,
      })
      expect(flash).toMatchSnapshot()
    })
  })
})
