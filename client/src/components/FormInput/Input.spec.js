import React from 'react'
import { shallow } from 'enzyme'

import Input from './Input'

describe('components/Input', () => {
  const input = shallow(<Input />)

  it('renders', () => {
    expect(input).toMatchSnapshot()
  })
})
