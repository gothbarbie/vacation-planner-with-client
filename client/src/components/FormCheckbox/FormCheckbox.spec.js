import React from 'react'
import { shallow } from 'enzyme'
import FormCheckbox from './FormCheckbox'

describe('components/FormCheckbox', () => {
  const formCheckbox = shallow(<FormCheckbox />)

  it('renders', () => {
    expect(formCheckbox).toMatchSnapshot()
  })
})
