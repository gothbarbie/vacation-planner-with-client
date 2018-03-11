// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import type { MapStateToProps } from 'react-redux'
import moment from 'moment'

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

type Props = {
  date: Date,
}

type State = {
  arrival: string,
  departure: string,
  participants: Array<participant>,
  errors: {
    arrival: string,
    departure: string,
    participants: string,
  },
}

export class Schedule extends Component<Props, State> {
  state = {
    arrival: {
      value: '',
      touched: false,
    },
    departure: {
      value: '',
      touched: false,
    },
    people: [
      {
        name: 'Folke',
        checked: false,
      },
      {
        name: 'Carina',
        checked: false,
      },
    ],
    errors: {
      arrival: '',
      departure: '',
      people: '',
    },
  }
  renderDays () {
    const daysInMonth = moment(this.props.date).daysInMonth()
    const emptyDays = 35 - daysInMonth
    const days = []

    for (let i = 0; i < daysInMonth; i++) {
      days.push({
        date: i + 1,
        occupied: false,
        status: '',
        weekend: false,
        empty: false,
      })
    }

    for (let i = 0; i < emptyDays; i++) {
      days.push({
        date: null,
        occupied: false,
        status: '',
        weekend: false,
        empty: true,
      })
    }

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

  handleSubmit = (event: Event) => {
    event.preventDefault()
    this.validateForm()
    console.log(this.state)
    // this.props.createVacation(this.state)
  }

  handleChange = (event: SyntheticInputEvent<any>) => {
    if (event && event.target && event.target.name) {
      const newState = { ...this.state }
      newState.people.map(p => {
        if (p.name === event.target.name) {
          return (p.checked = !p.checked)
        }
        return p
      })
      this.setState(newState)
    }
  }

  handleDateChange = (event?: SyntheticInputEvent<any>) => {
    if (event && event.target) {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name
      this.setState({ [name]: { ...this.state[name], value } })
    }
  }

  handleBlur = (field: string) => (event: SyntheticFocusEvent<any>) => {
    this.setState({
      [field]: { ...this.state[field], touched: true },
    })
    this.validateForm()
  }

  validateForm () {
    const errors = {}

    const arrival = this.state.arrival.value 
    const departure = this.state.departure.value 
    const people = this.state.people 

    errors.arrival = !arrival.length && 'Arrival is required'
    errors.departure = !departure.length && 'Departure is required'
    errors.people = !people.length && 'At least one participant is required'

    this.setState({
      errors: { ...errors },
    })
  }

  renderParticipants () {
    const { people } = this.state
    return (
      people.length &&
      people.map((p, i) => (
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

  renderCurrentMonth () {
    return moment(this.props.date).format('MMMM YYYY')
  }

  renderPreviousMonth () {
    const prevMonth = moment(this.props.date).clone()
    prevMonth.subtract(1, 'month')
    if (prevMonth.month() === 0 || prevMonth.month() === 11) {
      return prevMonth.format('MMMM YYYY')
    }
    return prevMonth.format('MMMM')
  }

  renderNextMonth () {
    const nextMonth = moment(this.props.date).clone()
    nextMonth.add(1, 'month').format('MMMM')
    if (nextMonth.month() === 0 || nextMonth.month() === 11) {
      return nextMonth.format('MMMM YYYY')
    }
    return nextMonth.format('MMMM')
  }

  showErrors = (field: string) => {
    if (this.state.errors[field] && this.state[field].touched) {
      return this.state.errors[field]
    }
  }

  render () {
    return (
      <section className="schedule">
        <H1>Schedule</H1>

        <nav className="time-nav">
          <Link to="/">
            <Icon marginRight name="arrow-circle-left" size="3x" />
            {this.renderPreviousMonth()}
          </Link>
          <span className="time-nav__current-month">
            {this.renderCurrentMonth()}
          </span>
          <Link to="/">
            {this.renderNextMonth()}
            <Icon marginLeft name="arrow-circle-right" size="3x" />
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
          <Form 
            onSubmit={this.handleSubmit}
            submitText="Add" 
            title="New Trip" 
          >
            <H3>Time Period</H3>
            <div className="register__columns">
              <Input
                error={this.showErrors('arrival')}
                handleBlur={this.handleBlur('arrival')}
                handleChange={this.handleDateChange}
                label="Arrival"
                name="arrival"
                placeholder="YYYY-MM-DD"
                type="date"
                value={this.state.arrival.value}
              />
              <Input
                error={this.showErrors('departure')}
                handleBlur={this.handleBlur('departure')}
                handleChange={this.handleDateChange}
                label="Departure"
                name="departure"
                placeholder="YYYY-MM-DD"
                type="date"
                value={this.state.departure.value}
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

const mapStateToProps = ({ date }) => {
  return {
    date,
  }
}

export default connect((mapStateToProps: MapStateToProps<*, *, *>))(Schedule)
