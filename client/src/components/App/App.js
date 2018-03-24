// @flow

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import './App.css'

import Header from '../Layout/Header'
import Flash from '../Flash'
import Footer from '../Layout/Footer'
import Main from '../Layout/Main'

import Schedule from '../../routes/Schedule'
import Login from '../../routes/Login/LoginContainer'
import Register from '../../routes/Register'

import restricted from '../../routes/restricted'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const App = () => {
  return (
    <div>
      <Switch>
        <Wrapper>
          {/* <Header />
          <Flash /> */}
          <Main>
            <Route component={Login} exact path="/" />
            <Route component={Register} exact path="/register" />
            <Route component={restricted(Schedule)} exact path="/schedule" />
          </Main>
          <Footer />
        </Wrapper>
      </Switch>
    </div>
  )
}

export default App
