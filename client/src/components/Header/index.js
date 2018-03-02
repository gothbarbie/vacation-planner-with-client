import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  renderLogin() {
    if (this.props.auth) {
      return <a href="/api/logout">Logout</a>
    }
    return <a href="/auth/google">Login with Google</a>
  }

  render() {
    return (
      <header>
        <h1>Title</h1>
        <nav>
        </nav>
      </header>
    )
  }
}  

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)
