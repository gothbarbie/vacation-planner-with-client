// @flow

import React from 'react'

import './Main.css'

type props = {
  children: ReactElement,
}

export default ({ children } : props) => (
  <main className="main">
    <div className="main__inner">{children}</div>
  </main>
)
