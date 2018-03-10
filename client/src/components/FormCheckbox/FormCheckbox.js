// @flow

import React from 'react'

import './FormCheckbox.css'

type Props = {
  checked: boolean,
  label?: string,
  name: string,
  onChange: Function,
}

const FormCheckbox = ({ checked, label, name, onChange }: Props) => (
  <label className="form-checkbox">
    <input
      checked={checked}
      className="form-checkbox__input"
      name={name}
      onChange={onChange}
      type="checkbox"
    />
    <span className="form-checkbox__checkmark" />
    <label className="form-checkbox__label">{label || 'Label missing'}</label>
  </label>
)

export default FormCheckbox
