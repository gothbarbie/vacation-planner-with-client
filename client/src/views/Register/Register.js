// @flow
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import PageWrapper from '../../components/PageWrapper'
import ThreeColumnsWrapper from '../../components/ThreeColumnsWrapper'
import H1 from '../../components/H1'
import Form from '../../components/Form'
import Input from '../../components/FormInput'
import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'

import './Register.css'

type Props = {
  mutate: Function,
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

export class Register extends Component<Props, State> {
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

  handleSubmit = (event: Event) => {
    event.preventDefault()
    const { firstName, lastName, email, password } = this.state
    this.props.mutate({
      variables: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      },
    })
  }

  handleChange = (event?: SyntheticInputEvent<any>) => {
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
      <PageWrapper>
        <H1>New User</H1>

        <ThreeColumnsWrapper>
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
            <ButtonLink secondary url="/auth/register/google">
              <Icon isBrand marginRight name="google-plus" />Register with
              Google
            </ButtonLink>
          </div>
        </ThreeColumnsWrapper>
      </PageWrapper>
    )
  }
}

const mutation = gql`
  mutation AddUser(
    $email: String!
    $firstName: String
    $lastName: String
    $password: String!
  ) {
    addUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      id
    }
  }
`

export default graphql(mutation)(Register)
