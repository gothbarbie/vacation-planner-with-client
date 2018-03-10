import * as React from 'react'

import './Main.css'

const Main = ({ children }) => (
  <main className="main">
    <div className="main__inner">{children}</div>
  </main>
)

export default Main 
