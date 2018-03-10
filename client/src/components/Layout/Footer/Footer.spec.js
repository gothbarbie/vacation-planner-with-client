import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('components/Layout/Footer', () => {
  const footer = shallow(<Footer />)

  it('renders', () => {
    expect(footer).toMatchSnapshot()
  })
})
