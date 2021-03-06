// @flow

import React from 'react'
import classnames from 'classnames'

import './Icon.css'

type props = {
  name: string,
  isBrand?: boolean,
  size?: string,
  marginLeft?: boolean,
  marginRight?: boolean,
}

const Icon = ({ name, isBrand, size, marginLeft, marginRight }: props) => (
  <i
    className={classnames(`icon fa-${name}`, {
      fab: isBrand,
      fas: !isBrand,
      'fa-xs': size === 'xs',
      'fa-sm': size === 'sm',
      'fa-lg': size === 'lg',
      'fa-2x': size === '2x',
      'fa-3x': size === '3x',
      'fa-5x': size === '5x',
      'fa-7x': size === '7x',
      'fa-10x': size === '10x',
      'margin-left': marginLeft,
      'margin-right': marginRight,
    })}
  />
)

export default Icon
