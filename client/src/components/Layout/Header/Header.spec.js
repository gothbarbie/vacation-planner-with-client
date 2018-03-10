import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './Header'

describe('components/Layout/Header', () => {
  const props = {
    auth: null,
  }
  const header = shallow(<Header {...props} />)

  it('renders', () => {
    expect(header).toMatchSnapshot()
  })
})
