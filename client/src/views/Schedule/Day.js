// @flow

import React from 'react'
import classnames from 'classnames'

import './Day.css'

type props = {
  date?: number,
  occupied: boolean,
  people: [{
    name: string
  }],
  status?: 'string',
  weekend: boolean,
  empty: boolean,
}

export default ({ date, empty, occupied, people, status, weekend }: props) => (
  <div
    className={classnames('day', {
      'day--weekend': weekend,
      'day--occupied': occupied,
      'day--empty': empty,
    })}>
    <div className="day__date">{date}</div>
    <div className="day__people">
      {people &&
        people.map(person => {
          return <div>{person.name}</div>
        })}
    </div>
    <div className={classnames('day__status', {
      'day__status--occupied': occupied,
    })}>{status}</div>
  </div>
)
