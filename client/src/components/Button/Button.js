// @flow

import * as React from 'react'
import classnames from 'classnames'

import './Button.css'

type Props = {
  children: React.ChildrenArray<any>,
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  onClick?: Function,
  url?: string,
}

const Button = ({ children, primary, secondary, disabled, onClick }: Props) => (
  <button
    className={classnames('btn btn__default', {
      btn__primary: primary,
      btn__secondary: secondary,
      'btn--disabled': disabled,
    })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
