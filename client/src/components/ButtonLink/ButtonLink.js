// @flow

import * as React from 'react'
import classnames from 'classnames'

import './ButtonLink.css'

type Props = {
  children: React.ChildrenArray<any>,
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  url?: string,
}

const ButtonLink = ({ children, primary, secondary, disabled, url }: Props) => (
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

export default ButtonLink
