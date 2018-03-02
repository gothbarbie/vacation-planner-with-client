import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Header.css'
import { ButtonLink } from '../../common/Button'

type Props = {
  auth: {} | null,
}

class Header extends Component<Props> {
  renderLogin () {
    if (this.props.auth) {
      return (
        <ButtonLink default url="/api/logout">
          Logout
        </ButtonLink>
      )
    }
    return (
      <ButtonLink primary url="/auth/google">
        Login with Google
      </ButtonLink>
    )
  }

  render () {
    return (
      <header className="header">
        <div className="header__inner">
          <img className="header__logo" src="/images/logo-v3.png" />
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

export default connect((mapStateToProps: MapStateToProps<*, *, *>))(Header)
