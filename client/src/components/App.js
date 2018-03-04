// @flow

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import './App.css'
import Header from './Layout/Header'
import Flash from './common/Flash'
import Footer from './Layout/Footer'
import Main from './Layout/Main'

import Schedule from '../views/Schedule'
import Login from '../views/Login'
import Register from '../views/Register'


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
            <Flash />
            <Main>
              <Route component={Login} exact path="/" />
              <Route component={Register} exact path="/register" />
              <Route component={Schedule} exact path="/schedule" />
            </Main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
