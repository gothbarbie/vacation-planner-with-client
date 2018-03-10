import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import './Header.css'
import ButtonLink from '../../ButtonLink'

type Props = {
  auth: {} | null,
  history: {
    location: string,
  }
}

export class Header extends Component<Props> {
  renderLogo () {
    if (this.props.auth) {
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
    if (this.props.auth) {
      return (
        <ButtonLink default url="/api/logout">
          Logout
        </ButtonLink>
      )
    }
    if (this.props.history && !this.props.history.location === '/') {
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

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect((mapStateToProps: MapStateToProps<*, *, *>))(
  withRouter(Header)
)
