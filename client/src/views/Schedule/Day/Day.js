// @flow

import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

import './Day.css'

type props = {
  date?: number,
  occupied: boolean,
  people: [
    {
      name: string,
    },
  ],
  status?: 'string',
  today: boolean,
  weekend: boolean,
  empty: boolean,
}

const Day = styled.div`

`

const Day = ({ date, empty, occupied, people, status, today, weekend }: props) => (
  <div
    className={classnames('day', {
      'day--weekend': weekend,
      'day--occupied': occupied,
      'day--empty': empty,
      'day--today': today,
    })}>
    {today}
    <div className="day__date">{date}</div>
    <div className="day__people">
      {people &&
        people.map(person => {
          return <div>{person.name}</div>
        })}
    </div>
    <div
      className={classnames('day__status', {
        'day__status--occupied': occupied,
      })}>
      {status}
    </div>
  </div>
)

export default Day
