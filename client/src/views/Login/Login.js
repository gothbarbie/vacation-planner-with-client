// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import type { RouterHistory } from 'react-router-dom'

import PageWrapper from '../../components/PageWrapper'
import ThreeColumnsWrapper from '../../components/ThreeColumnsWrapper'
import H1 from '../../components/H1'
import Notice from '../../components/Notice'
import Form from '../../components/Form'
import Input from '../../components/FormInput'
import './Login.css'
import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'
import * as actions from './loginActions'

type Props = {
  auth: {} | void,
  loginUser: Function,
  history: RouterHistory,
}

type State = {
  email: {
    value: string,
    touched: boolean,
  },
  password: {
    value: string,
    touched: boolean,
  },
  errors: {
    email: string,
    password: string,
  },
}

export class Login extends Component<Props, State> {
  state = {
    email: {
      value: '',
      touched: false,
    },
    password: {
      value: '',
      touched: false,
    },
    errors: {
      email: '',
      password: '',
    },
  }

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

  handleSubmit = (event: SyntheticEvent<any>) => {
    event.preventDefault()
    this.props.loginUser({
      email: this.state.email.value,
      password: this.state.password.value,
    })
    this.props.history.push('/schedule')
  }

  handleChange = (event: SyntheticInputEvent<any>) => {
    if (event && event.target) {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
      this.setState({ [name]: { ...this.state[name], value } })
    }
  }

  handleBlur = (field: string) => (event: SyntheticFocusEvent<any>) => {
    this.setState({
      [field]: { ...this.state[field], touched: true },
    })
    this.validateForm()
  }

  validateForm () {
    const email = this.state.email.value
    const password = this.state.password.value
    const errors = {}

    errors.email = !email.length && 'Email is required'
    errors.password = !password.length && 'Password is required'

    this.setState({
      errors: { ...this.state.errors, errors },
    })
  }

  showErrors = (field: string) => {
    if (this.state.errors[field] && this.state[field].touched) {
      return this.state.errors[field]
    }
  }

  render () {
    return (
      <PageWrapper>
        {this.renderAlreadyLoggedIn()}
        <H1>Login</H1>
        <ThreeColumnsWrapper>
          <div className="login__email">
            <Notice>
              First time here? <Link to="register"> Please register</Link>{' '}
              first...
            </Notice>
            <Form onSubmit={this.handleSubmit} title="Enter your credentials">
              <div className="login__columns">
                <Input
                  error={this.showErrors('email')}
                  handleBlur={this.handleBlur('email')}
                  handleChange={this.handleChange}
                  label="E-mail"
                  name="email"
                  type="email"
                  value={this.state.email.value}
                />
                <Input
                  error={this.showErrors('password')}
                  handleBlur={this.handleBlur('password')}
                  handleChange={this.handleChange}
                  label="Password"
                  name="password"
                  type="password"
                  value={this.state.password.value}
                />
              </div>
            </Form>
          </div>
          <div className="login__or">Or...</div>
          <div className="login__google">
            <ButtonLink secondary url="/auth/google">
              <Icon isBrand marginRight name="google-plus" />Login with Google
            </ButtonLink>
          </div>
        </ThreeColumnsWrapper>
      </PageWrapper>
    )
  }
}

export const mapStateToProps = ({ auth }: Object) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps, actions)(withRouter(Login))
