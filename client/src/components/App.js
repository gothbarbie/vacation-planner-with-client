// Rendering
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Landing = () => (
  <div>Landing</div>
)

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header>
              <h1>Logo</h1>
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

export default connect(null, actions)(App)
