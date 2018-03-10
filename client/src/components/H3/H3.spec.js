import React from 'react'
import { shallow } from 'enzyme'

import H3 from './H3'

describe('components/H3', () => {
  const h3 = shallow(<H3 />)

  it('renders', () => {
    expect(h3).toMatchSnapshot()
  })
})
