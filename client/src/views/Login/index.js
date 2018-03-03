import React from 'react'
import { Link } from 'react-router-dom'

import H1 from '../../components/common/H1'
import Notice from '../../components/common/Notice'
import Form from '../../components/common/Form'
import Input from '../../components/common/Form/Input'
import './Login.css'

export default () => (
  <section className="login">
    <H1>Login</H1>
    <div className="login__inner">
      <Notice>
        First time here? <Link to="register"> Please register</Link> first...
      </Notice>
      <Form title="Enter your credentials">
        <div className="login__columns">
          <Input label="E-mail" name="email" error="This field is required" />
          <Input label="Password" name="password" />
        </div>
      </Form>
    </div>
  </section>
)
