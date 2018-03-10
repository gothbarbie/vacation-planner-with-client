import React from 'react'
import { shallow } from 'enzyme'

import Notice from './Notice'

describe('components/Notice', () => {
  const notice = shallow(<Notice />)

  it('renders', () => {
    expect(notice).toMatchSnapshot()
  })
})
