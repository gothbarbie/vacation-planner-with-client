import React from 'react'

import Button from '../Button'
import H2 from '../H2'
import './Form.css'

type props = {
  children: ReactElement,
}

export default ({ children } : props) => (
  <section className="form">
    <header className="form__header">
      <H2>
        Form <em>(status)</em>
      </H2>
    </header>
    <main className="form__main">
      {children}
    </main>
    <footer className="form__footer">
      <Button>Delete</Button>
      <Button>Submit</Button>
    </footer>
  </section>
)
