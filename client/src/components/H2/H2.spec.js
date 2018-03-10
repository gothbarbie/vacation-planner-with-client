import React from 'react'
import { shallow } from 'enzyme'

import H2 from './H2'

describe('components/H2', () => {
  const h2 = shallow(<H2 />)

  it('renders', () => {
    expect(h2).toMatchSnapshot()
  })
})
