import React from 'react'

import Button from '../Button'
import H2 from '../H2'
import './Form.css'

type props = {
  children: ReactElement,
  title: string,
  status?: string,
}

export default ({ children, status, title } : props) => (
  <section className="form">
    <header className="form__header">
      <H2>
        {title} {status && <em>({status})</em>}
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
