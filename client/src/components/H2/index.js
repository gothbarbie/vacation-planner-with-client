// @flow

import * as React from 'react'
import classnames from 'classnames'
import './H2.css'

type props = {
  children: React.ChildrenArray<any>,
  light?: boolean,
  dark?: boolean,
}

export default ({ children, light, dark }: props) => (
  <h2
    className={classnames('h2', {
      'h2--light': light,
      'h2--dark': dark,
    })}>
    {children}
  </h2>
)
