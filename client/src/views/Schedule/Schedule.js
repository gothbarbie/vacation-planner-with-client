// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import H1 from '../../components/H1'
import H3 from '../../components/H3'
import Day from './Day/index'
import Form from '../../components/Form'
import Icon from '../../components/Icon'
import Input from '../../components/FormInput'
import Checkbox from '../../components/FormCheckbox'

import './Schedule.css'

type participant = {
  name: string,
  checked: boolean,
}

type Props = {}
type State = {
  participants: Array<participant>,
}

export class Schedule extends Component<Props, State> {
  state = {
    participants: [
      {
        name: 'Folke',
        checked: true,
      },
      {
        name: 'Carina',
        checked: true,
      },
    ],
  }
  renderDays () {
    const days = [
      {
        date: 1,
        occupied: true,
        status: 'Arrival',
        weekend: true,
        empty: false,
      },
    ]

    return days.map(({ date, empty, occupied, status, weekend }, i) => (
      <Day
        date={date}
        empty={empty}
        key={`day-${i}`}
        occupied={occupied}
        status={status}
        weekend={weekend}
      />
    ))
  }

  handleChange = (event: SyntheticInputEvent<any>) => {
    if (event && event.target && event.target.name) {
      const newState = { ...this.state }
      newState.participants.map(p => {
        if (p.name === event.target.name) {
          return (p.checked = !p.checked)
        }
        return p
      })
      this.setState(newState)
    }
  }

  renderParticipants () {
    const { participants } = this.state
    return (
      participants.length &&
      participants.map((p, i) => (
        <Checkbox
          checked={p.checked}
          key={`participant-${i}`}
          label={p.name}
          name={p.name}
          onChange={this.handleChange}
        />
      ))
    )
  }

  render () {
    return (
      <section className="schedule">
        <H1>January</H1>

        <nav className="time-nav">
          <Link to="/">
            <Icon marginRight name="arrow-circle-left" size="3x" />December 2017
          </Link>
          <Link to="/">
            February<Icon marginLeft name="arrow-circle-right" size="3x" />
          </Link>
        </nav>
        <section className="calendar">
          <header className="calendar__header">
            <span>Monday</span>
            <span>Tuesday</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
            <span>Sunday</span>
          </header>
          <main className="calendar__days">{this.renderDays()}</main>
        </section>

        <div className="schedule__inner">
          <Form submitText="Add" title="New Trip">
            <H3>Time Period</H3>
            <div className="register__columns">
              <Input
                label="Arrival"
                name="arrival"
                placeholder="YYYY-MM-DD"
                type="date"
              />
              <Input
                label="Departure"
                name="departure"
                placeholder="YYYY-MM-DD"
                type="date"
              />
            </div>
            <H3>Participants</H3>
            <div className="register__columns">{this.renderParticipants()}</div>
          </Form>
        </div>
      </section>
    )
  }
}

export default Schedule
