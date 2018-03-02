import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Header.css'
import Button from '../../common/Button'

type Props = {
  auth: {} | null
}

class Header extends Component<Props> {
  renderLogin () {
    if (this.props.auth) {
      return <a href="/api/logout">Logout</a>
    }
    return <a href="/auth/google">Login with Google</a>
  }

  render () {
    return (
      <header className="header">
        <h1 className="header__logo">Title</h1>
        <nav>
          {this.renderLogin()}
          <Button>Test</Button>
        </nav>
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
