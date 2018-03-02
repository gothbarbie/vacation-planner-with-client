// @flow

import React from 'react'
import classnames from 'classnames'

import './H3.css'

type props = {
  children: ReactElement,
  light?: boolean,
  dark?: boolean,
}

export default ({ children, light, dark }: props) => (
  <h3
    className={classnames('h3', {
      'h3--light': light,
      'h3--dark': dark,
    })}>
    {children}
  </h3>
)
