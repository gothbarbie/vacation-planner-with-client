// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { compose, graphql } from 'react-apollo'

import logout from '../../../mutations/logout'

import auth from '../../../queries/auth'
import './Header.css'
import ButtonLink from '../../ButtonLink'

type Props = {
  mutate: Function,
  data: {
    loading: boolean, 
    auth: {
      email: string,
    },
  },
  history: {
    location: string,
  },
}

export class Header extends Component<Props> {
  logout () {
    this.props.mutate({
      refetchQueries: [{ query: auth }],
    })
  }

  renderLogo () {
    const { data } = this.props
    console.log('props', this.props)
    if (data && data.auth) {
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
    const { data, history } = this.props

    if (data && data.loading) {
      return <div>Loading...</div>
    }
    if (data && data.auth) {
      return (
        <ButtonLink default url="/api/logout">
          Logout
        </ButtonLink>
      )
    }
    if (history && history.location !== '/') {
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

export default compose(
  graphql(logout, { name: 'logout' }),
  graphql(auth)
)(Header)
