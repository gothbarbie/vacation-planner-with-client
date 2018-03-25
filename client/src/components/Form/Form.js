import React from 'react'
import classnames from 'classnames'

import Button from '../Button'
import H2 from '../H2'
import './Form.css'

type props = {
  children: ReactElement,
  enableSubmit?: boolean,
  title: string,
  status?: string,
  onDelete?: Function,
  onSubmit: Function,
  submitText: string,
}

const Form = ({
  children,
  enableSubmit,
  status,
  title,
  onDelete,
  onSubmit,
  submitText,
}: props) => (
  <section className="form">
    <form onSubmit={onSubmit}>
      <header className="form__header">
        <H2>
          {title} {status && <em>({status})</em>}
        </H2>
      </header>
      <main className="form__main">{children}</main>
      <footer
        className={classnames('form__footer', {
          'form__footer--single-button': !onDelete,
        })}>
        {onDelete && (
          <Button onClick={onDelete} secondary>
            Delete
          </Button>
        )}
        <Button disabled={!enableSubmit} primary type="submit">
          {submitText || 'Submit'}
        </Button>
      </footer>
    </form>
  </section>
)

export default Form
