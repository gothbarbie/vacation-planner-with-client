// @flow

import * as React from 'react'
import classnames from 'classnames'

import Icon from '../Icon'

import './Notice.css'

type Props = {
  children: React.Children,
  warning?: boolean,
}

const Notice = ({ children, warning }: Props) => (
  <div
    className={classnames('notice', {
      'notice-blue': !warning,
      'notice-yellow': warning,
    })}>
    <Icon marginRight name="exclamation-circle" size="2x" />
    <div>{children}</div>
  </div>
)

export default Notice
