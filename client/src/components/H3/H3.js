// @flow

import * as React from 'react'
import classnames from 'classnames'

import './H3.css'

type props = {
  children: React.ChildrenArray<any>,
  light?: boolean,
  dark?: boolean,
}

const H3 = ({ children, light, dark }: props) => (
  <h3
    className={classnames('h3', {
      'h3--light': light,
      'h3--dark': dark,
    })}>
    {children}
  </h3>
)

export default H3
