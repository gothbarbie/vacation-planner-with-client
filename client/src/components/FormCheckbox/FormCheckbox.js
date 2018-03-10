// @flow

import React from 'react'

import './FormCheckbox.css'

type Props = {
  checked: boolean,
  label?: string,
}

const FormCheckbox = ({ checked, label }: Props) => (
  <label className="form-checkbox">
    <input checked={checked} className="form-checkbox__input" type="checkbox" />
    <span className="form-checkbox__checkmark" />
    <label className="form-checkbox__label">{label || 'Label missing'}</label>
  </label>
)

export default FormCheckbox
