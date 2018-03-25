// @flow

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import './App.css'

import requireAuth from '../../HOCs/requireAuth'

import Header from '../Layout/Header'
import Flash from '../Flash'
import Footer from '../Layout/Footer'
import Main from '../Layout/Main'

import Schedule from '../../views/Schedule'
import Login from '../../views/Login'
import Register from '../../views/Register'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const App = () => (
  <div>
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Flash />
        <Main>
          <Route component={Login} exact path="/" />
          <Route component={Register} exact path="/register" />
          <Route component={requireAuth(Schedule)} exact path="/schedule" />
        </Main>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  </div>
)
  

export default App
