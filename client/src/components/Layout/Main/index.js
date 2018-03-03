// @flow

import * as React from 'react'

import './Main.css'

type Props = {
  children: React.Element<any>,
}

export default ({ children }: Props) => (
  <main className="main">
    <div className="main__inner">{children}</div>
  </main>
)
