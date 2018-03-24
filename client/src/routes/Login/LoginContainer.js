import React from 'react'

import Login from './Login'

import type { RouterHistory } from 'react-router-dom'

type Props = {
  history: RouterHistory,
}

export const LoginContainer = ({ history }: Props) => (
  <Login history={history} />
)
  
export default LoginContainer
