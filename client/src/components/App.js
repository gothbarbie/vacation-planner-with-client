// @flow

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
const Landing = () => <div>Landing</div>
const Welcome = () => <div>Welcome</div>

type Props = {
  fetchUser: Function,
}

class App extends Component<Props> {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <div className="container">
              <Route component={Landing} exact path="/" />
              <Route component={Welcome} exact path="/welcome" />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
