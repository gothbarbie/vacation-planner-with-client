// @flow
import React from 'react'

import './Input.css'

type props = {
  label: string,
  name: string,
  placeholder: string,
  error?: string
}

export default ({ error, name, placeholder, label }: props) => (
  <div className="input">
    <label className="input__label">{label}</label>
    <input className="input__input" name={name} placeholder={placeholder} type="text" />
    {error && <div className="input__error">{error}<span /></div>}
  </div>
)
