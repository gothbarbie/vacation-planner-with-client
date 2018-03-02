// @flow

import React from 'react'

import './H1.css'

type props = {
  children: ReactElement
}

export default ({ children } : props) => (
  <h1>{children}</h1>
)
