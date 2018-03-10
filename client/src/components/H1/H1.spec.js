import React from 'react'
import { shallow } from 'enzyme'

import H1 from './H1'

describe('components/H1', () => {
  const h1 = shallow(<H1 />)

  it('renders', () => {
    expect(h1).toMatchSnapshot()
  })
})
