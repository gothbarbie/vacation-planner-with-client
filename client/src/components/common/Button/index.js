// @flow

import React from 'react'

import './Button.css'

type props = {
  children: ReactElement,
  primary: boolean,
  secondary: boolean,
  disabled: boolean,
}

export default ({ children, primary, secondary, disabled } : props) => <button className={classnames('btn btn-default', {
  'btn-primary': primary,
  'btn-secondary': secondary,
  'btn-disabled': disabled,
})} disabled={disabled}>{children}</button>
