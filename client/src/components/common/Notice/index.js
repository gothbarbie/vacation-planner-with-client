// @flow

import React from 'react'

import Icon from '../Icon'

import './Notice.css'

type props = {
  children: ReactElement
}

export default ({ children } : props) => (
  <div className="notice notice-blue">
    <Icon marginRight name="exclamation-circle" size="2x" /><div>{children}</div>
  </div>
)
