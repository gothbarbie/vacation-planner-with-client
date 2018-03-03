import * as React from 'react'

import './Main.css'

export default ({ children }) => (
  <main className="main">
    <div className="main__inner">{children}</div>
  </main>
)
