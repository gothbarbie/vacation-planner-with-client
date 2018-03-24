// @flow

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'

import query from '../../../queries/Auth'
import mutation from '../../../mutations/Logout'

import './Header.css'
import Button from '../../Button'
import ButtonLink from '../../ButtonLink'

type Props = {
  auth: {} | void,
  history: {
    location: string,
  },
}

export class Header extends Component<Props> {
  handleLogout () {
    this.props.mutate({
      refetchQueries: [{ query }],
    })
  }

  renderLogo () {
    console.log('header', this.props.data)
    if (this.props.data.auth) {
      return (
        <Link to="/schedule">
          <img
            alt="Vacation Planner"
            className="header__logo"
            src="/images/logo-v3.png"
          />
        </Link>
      )
    }
    return (
      <Link to="/">
        <img
          alt="Vacation Planner"
          className="header__logo"
          src="/images/logo-v3.png"
        />
      </Link>
    )
  }

  renderLogin () {
    if (this.props.data.auth) {
      return <Button onClick={this.handleLogout}>Logout</Button>
    }
    if (this.props.history && this.props.history.location !== '/') {
      return (
        <ButtonLink primary url="/">
          Login
        </ButtonLink>
      )
    }
  }

  render () {
    return (
      <header className="header">
        <div className="header__inner">
          {this.renderLogo()}
          <nav className="nav">
            <Link to="/schedule">Schedule</Link>
            <span className="nav__separator" />
            <Link to="/people">People</Link>
            <span className="nav__separator" />
            <Link to="/destinations">Destinations</Link>
          </nav>
          {this.renderLogin()}
        </div>
      </header>
    )
  }
}

export default compose(graphql(mutation), graphql(query))(withRouter(Header))
