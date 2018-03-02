// @flow

import React from 'react'
import classnames from 'classnames'

import './H1.css'

type props = {
  children: ReactElement,
  light?: boolean,
  dark?: boolean
}

export default ({ children, light, dark } : props) => (
  <h1 className={classnames('h1', {
    'h1--light': light,
    'h1--dark': dark,
  })}>{children}</h1>
)
