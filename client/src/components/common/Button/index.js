// @flow

import React from 'react'
import classnames from 'classnames'
import type { Element } from 'react'

import './Button.css'

type props = {
  children: Element<any>,
  primary: boolean,
  secondary: boolean,
  disabled: boolean,
  url?: string,
}

export default ({ children, primary, secondary, disabled }: props) => (
  <button
    className={classnames('btn btn__default', {
      btn__primary: primary,
      btn__secondary: secondary,
      'btn--disabled': disabled,
    })}
    disabled={disabled}>
    {children}
  </button>
)

export const ButtonLink = ({
  children,
  primary,
  secondary,
  disabled,
  url,
}: props) => (
  <a
    className={classnames('btn btn__default', {
      btn__primary: primary,
      btn__secondary: secondary,
      'btn--disabled': disabled,
    })}
    disabled={disabled}
    href={url}>
    {children}
  </a>
)
