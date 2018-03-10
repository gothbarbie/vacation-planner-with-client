// @flow

import * as React from 'react'

import './Main.css'

type Props = {
  children: React.ChildrenArray<any>,
}

const Main = ({ children }: Props) => (
  <main className="main">
    <div className="main__inner">{children}</div>
  </main>
)

export default Main
