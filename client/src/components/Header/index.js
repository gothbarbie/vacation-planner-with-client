import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      <header>
        <h1>Title</h1>
        <nav>
          {this.renderLogin()}
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
