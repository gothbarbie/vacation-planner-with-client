// @flow
import React from 'react'

import './Input.css'

type props = {
  error?: string,
  label: string,
  name: string,
  placeholder?: string,
  required?: boolean,
  type?: string
}

export default ({ error, label, name, placeholder, required, type }: props) => (
  <div className="input">
    <label className="input__label">
      {label}
      {required && <span>*</span>}
    </label>
    <input
      className="input__input"
      name={name}
      placeholder={placeholder}
      type={type ? type : 'text'}
    />
    {error && (
      <div className="input__error">
        {error}
        <span />
      </div>
    )}
  </div>
)
