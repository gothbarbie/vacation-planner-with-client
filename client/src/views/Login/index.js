// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import H1 from '../../components/common/H1'
import Notice from '../../components/common/Notice'
import Form from '../../components/common/Form'
import Input from '../../components/common/Form/Input'
import './Login.css'
import { ButtonLink } from '../../components/common/Button'
import Icon from '../../components/common/Icon'

import type { MapStateToProps } from 'react-redux'

type Props = {
  auth: {},
}

class Login extends Component<Props> {
  renderAlreadyLoggedIn () {
    if (this.props.auth) {
      return (
        <Notice warning>
          You are already logged in, do you want to log in as another user?{' '}
          <Link to="/api/logout">Log out</Link>
        </Notice>
      )
    }
  }

  render () {
    return (
      <section className="login">
        {this.renderAlreadyLoggedIn()}
        <H1>Login</H1>
        <div className="login__inner">
          <div className="login__email">
            <Notice>
              First time here? <Link to="register"> Please register</Link>{' '}
              first...
            </Notice>
            <Form title="Enter your credentials">
              <div className="login__columns">
                <Input
                  error="This field is required"
                  label="E-mail"
                  name="email"
                />
                <Input label="Password" name="password" />
              </div>
            </Form>
          </div>
          <div className="login__or">Or...</div>
          <div className="login__google">
            <ButtonLink secondary url="/auth/google">
              <Icon isBrand marginRight name="google-plus" />Login with Google
            </ButtonLink>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect((mapStateToProps: MapStateToProps<*, *, *>))(Login)
