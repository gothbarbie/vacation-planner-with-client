// Rendering
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Landing = () => <div>Landing</div>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  renderLogin() {
    if (this.props.auth) {
      return <a href="/api/logout">Logout</a>
    }
    return <a href="/auth/google">Login with Google</a>
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header>
              <h1>Logo</h1>
              <nav>
                {this.renderLogin()}
              </nav>
            </header>
            <div className="container">
              <Route exact path="/" component={Landing} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, actions)(App)
