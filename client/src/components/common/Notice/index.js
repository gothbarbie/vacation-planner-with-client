// @flow

import * as React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'

import './Notice.css'

type props = {
  children: React.Element<any>,
  warning: boolean,
}

export default ({ children, warning } : props) => (
  <div className={classnames('notice', {
    'notice-blue': !warning,
    'notice-yellow': warning,
  })}>
    <Icon marginRight name="exclamation-circle" size="2x" /><div>{children}</div>
  </div>
)
