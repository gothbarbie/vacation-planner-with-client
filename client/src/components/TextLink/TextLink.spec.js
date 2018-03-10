import React from 'react'
import { shallow } from 'enzyme'

import TextLink from './TextLink'

describe('components/TextLink', () => {
  const textLink = shallow(<TextLink />)

  it('renders', () => {
    expect(textLink).toMatchSnapshot()
  })
})
