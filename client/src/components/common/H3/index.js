// @flow

import React from 'react'
import classnames from 'classnames'
import type { Element } from 'react'

import './H3.css'

type props = {
  children: Element<any>,
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
