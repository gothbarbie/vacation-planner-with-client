// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import H1 from '../../components/common/H1'
import Form from '../../components/common/Form'
import Input from '../../components/common/Form/Input'
import { ButtonLink } from '../../components/common/Button'
import Icon from '../../components/common/Icon'
import * as actions from './registerActions'

import './Register.css'

type Props = {
  registerUser: Function,
}

type State = {
  firstName: {
    value: string,
    touched: boolean,
  },
  lastName: {
    value: string,
    touched: boolean,
  },
  email: {
    value: string,
    touched: boolean,
  },
  password: {
    value: string,
    touched: boolean,
  },
  passwordConfirm: {
    value: string,
    touched: boolean,
  },
  errors: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string,
  },
}

class Register extends Component<Props, State> {
  state = {
    firstName: {
      value: '',
      touched: false,
    },
    lastName: {
      value: '',
      touched: false,
    },
    email: {
      value: '',
      touched: false,
    },
    password: {
      value: '',
      touched: false,
    },
    passwordConfirm: {
      value: '',
      touched: false,
    },
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.registerUser(this.state)
  }

  handleChange = (event : Event) => {
    if (event && event.target) {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
      this.setState({ [name]: { ...this.state[name], value } })
    }
  }

  handleBlur = (field: string) => (event: Event) => {
    this.setState({
      [field]: { ...this.state[field], touched: true },
    })
    this.validateForm()
  }

  validateForm () {
    const errors = {}

    const email = this.state.email.value
    const password = this.state.password.value
    const passwordConfirm = this.state.passwordConfirm.value

    errors.email = !email.length && 'Email is required'
    errors.password = !password.length && 'Password is required'
    errors.passwordConfirm =
      !passwordConfirm.length && 'Confirm Password is required'
    if (!errors.passwordConfirm) {
      errors.passwordConfirm =
        password !== passwordConfirm && 'Passwords must match'
    }

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
      <section className="register">
        <H1>New User</H1>
        <div className="register__inner">
          <div className="register__email">
            <Form onSubmit={this.handleSubmit} title="Enter your credentials">
              <div className="register__columns">
                <Input
                  error={this.showErrors('firstName')}
                  handleBlur={this.handleBlur('firstName')}
                  handleChange={this.handleChange}
                  label="First Name"
                  name="firstName"
                  value={this.state.firstName.value}
                />
                <Input
                  error={this.showErrors('lastName')}
                  handleBlur={this.handleBlur('lastName')}
                  handleChange={this.handleChange}
                  label="Family Name"
                  name="lastName"
                  value={this.state.lastName.value}
                />
                <Input
                  error={this.showErrors('email')}
                  handleBlur={this.handleBlur('email')}
                  handleChange={this.handleChange}
                  label="E-mail"
                  name="email"
                  required
                  type="email"
                  value={this.state.email.value}
                />
                <Input
                  error={this.showErrors('password')}
                  handleBlur={this.handleBlur('password')}
                  handleChange={this.handleChange}
                  label="Password"
                  name="password"
                  required
                  type="password"
                  value={this.state.password.value}
                />
                <Input
                  error={this.showErrors('passwordConfirm')}
                  handleBlur={this.handleBlur('passwordConfirm')}
                  handleChange={this.handleChange}
                  label="Confirm Password"
                  name="passwordConfirm"
                  required
                  type="password"
                  value={this.state.passwordConfirm.value}
                />
              </div>
            </Form>
          </div>
          <div className="register__or">Or...</div>
          <div className="register__google">
            <ButtonLink secondary url="/auth/google">
              <Icon isBrand marginRight name="google-plus" />Register with
              Google
            </ButtonLink>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(null, actions)(Register)
