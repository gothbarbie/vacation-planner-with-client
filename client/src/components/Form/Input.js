// @flow
import React from 'react'

import './Input.css'

type props = {
  error?: string,
  label: string,
  name: string,
  handleBlur: Function,
  handleChange: Function,
  placeholder?: string,
  required?: boolean,
  type?: string,
  value: string,
}

export default ({ error, label, name, handleBlur, handleChange, placeholder, required, type, value }: props) => (
  <div className="input">
    <label className="input__label">
      {label}
      {required && <span>*</span>}
    </label>
    <input
      className="input__input"
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      type={type ? type : 'text'}
      value={value}
    />
    {error && (
      <div className="input__error">
        {error}
        <span />
      </div>
    )}
  </div>
)
