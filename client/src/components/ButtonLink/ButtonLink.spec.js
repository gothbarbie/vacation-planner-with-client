import React from 'react'
import { shallow } from 'enzyme'

import ButtonLink from './ButtonLink'

describe('components/Input', () => {
  const buttonLink = shallow(<ButtonLink />)

  it('renders', () => {
    expect(buttonLink).toMatchSnapshot()
  })
})
