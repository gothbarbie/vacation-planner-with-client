import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Header.css'
import { ButtonLink } from '../../common/Button'

type Props = {
  auth: {} | null,
}

class Header extends Component<Props> {
  renderLogin () {
    if (this.props.auth) {
      return <ButtonLink default url="/api/logout">Logout</ButtonLink>
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
          <h1 className="header__logo">Title</h1>
          <nav>{this.renderLogin()}</nav>
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
