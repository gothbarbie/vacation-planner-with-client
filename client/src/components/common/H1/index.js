// @flow

import React from 'react'
import classnames from 'classnames'
import type { Element } from 'react'

import './H1.css'

type props = {
  children: Element<any>,
  light?: boolean,
  dark?: boolean
}

export default ({ children, light, dark } : props) => (
  <h1 className={classnames('h1', {
    'h1--light': light,
    'h1--dark': dark,
  })}><span>{children}</span></h1>
)
