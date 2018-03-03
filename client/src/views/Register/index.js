import React from 'react'

import H1 from '../../components/common/H1'
import Form from '../../components/common/Form'
import Input from '../../components/common/Form/Input'
import { ButtonLink } from '../../components/common/Button'
import Icon from '../../components/common/Icon'

import './Register.css'

export default () => (
  <section className="register">
    <H1>New User</H1>
    <div className="register__inner">
      <div className="register__email">
        <Form title="Enter your credentials">
          <div className="register__columns">
            <Input label="First Name" name="firstName" />
            <Input label="Family Name" name="lastName" />
            <Input label="E-mail" name="email" required type="email" />
            <Input label="Password" name="password" required type="password" />
            <Input
              label="Confirm Password"
              name="password-confirm"
              required
              type="password"
            />
          </div>
        </Form>
      </div>
      <div className="register__or">Or...</div>
      <div className="register__google">
        <ButtonLink secondary url="/auth/google">
          <Icon isBrand marginRight name="google-plus" />Register with Google
        </ButtonLink>
      </div>
    </div>
  </section>
)
