import React from 'react'
import { shallow } from 'enzyme'

import Main from './Main'

describe('components/Layout/Main', () => {
  const main = shallow(<Main />)

  it('renders', () => {
    expect(main).toMatchSnapshot()
  })
})
