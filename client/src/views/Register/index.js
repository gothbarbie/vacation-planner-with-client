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
    touched: boolean
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
    touched: boolean
  },
  errors: {},
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
    errors: {},
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.registerUser(this.state)
    
  }

  handleChange = event => {
    if (event.target) {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
      this.setState({ [name]: { ...this.state[name], value } })
    }
  }

  handleBlur = field => event => {
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
    errors.passwordConfirm = !passwordConfirm.length && 'Confirm Password is required'
    if (!errors.passwordConfirm) {
      errors.passwordConfirm = password !== passwordConfirm && 'Passwords must match'
    }
    
    this.setState({
      errors,
    })
  }

  showErrors = field => {
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
                  label="First Name"
                  name="firstName"
                  onBlur={this.handleBlur('firstName')}
                  onChange={this.handleChange}
                  value={this.state.firstName.value}
                />
                <Input
                  error={this.showErrors('lastName')}
                  label="Family Name"
                  name="lastName"
                  onBlur={this.handleBlur('lastName')}
                  onChange={this.handleChange}
                  value={this.state.lastName.value}
                />
                <Input
                  error={this.showErrors('email')}
                  label="E-mail"
                  name="email"
                  onBlur={this.handleBlur('email')}
                  onChange={this.handleChange}
                  required
                  type="email"
                  value={this.state.email.value}
                />
                <Input
                  error={this.showErrors('password')}
                  label="Password"
                  name="password"
                  onBlur={this.handleBlur('password')}
                  onChange={this.handleChange}
                  required
                  type="password"
                  value={this.state.password.value}
                />
                <Input
                  error={this.showErrors('passwordConfirm')}
                  label="Confirm Password"
                  name="passwordConfirm"
                  onBlur={this.handleBlur('passwordConfirm')}
                  onChange={this.handleChange}
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
