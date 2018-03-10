import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  const button = shallow(<Button />)

  it('renders', () => {
    expect(button).toMatchSnapshot()
  })
})
