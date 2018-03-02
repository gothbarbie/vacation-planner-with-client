// @flow

import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Main from './Layout/Main'

import H1 from './common/H1'

import Schedule from '../views/Schedule'

const Landing = () => <div><H1>Welcome</H1></div>

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
            <Main>
              <Route component={Landing} exact path="/" />
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
