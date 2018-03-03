import React from 'react'
import classnames from 'classnames'

import Button from '../Button'
import H2 from '../H2'
import './Form.css'

type props = {
  children: ReactElement,
  title: string,
  status?: string,
  onDelete?: Function,
  onSubmit: Function
}

export default ({ children, status, title, onDelete, onSubmit } : props) => (
  <section className="form">
    <header className="form__header">
      <H2>
        {title} {status && <em>({status})</em>}
      </H2>
    </header>
    <main className="form__main">
      {children}
    </main>
    <footer className={classnames('form__footer', {
      'form__footer--single-button': !onDelete,
    })}>
      {onDelete && <Button onClick={onDelete}>Delete</Button>}
      <Button onClick={onSubmit}>Submit</Button>
    </footer>
  </section>
)
