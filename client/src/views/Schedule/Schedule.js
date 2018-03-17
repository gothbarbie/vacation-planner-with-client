// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import validator from 'validator'

import { createVacation } from './scheduleActions'
import H1 from '../../components/H1'
import H3 from '../../components/H3'
import Day from './Day/index'
import Form from '../../components/Form'
import Icon from '../../components/Icon'
import Input from '../../components/FormInput'
import Checkbox from '../../components/FormCheckbox'

import './Schedule.css'

import type { RouterHistory } from 'react-router-dom'

type participant = {
  name: string,
  checked: boolean,
}

type Props = {
  auth: void | Object,
  date: Date,
  history: RouterHistory,
  createVacation: Function,
}

type State = {
  arrival: {
    value: string,
    touched: boolean,
  },
  departure: {
    value: string,
    touched: boolean,
  },
  people: Array<participant>,
  errors: {
    arrival: boolean | string,
    departure: boolean | string,
    people: boolean | string,
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

  componentWillMount () {
    if (!this.props.auth) {
      this.props.history.push('/')
    }
  }

  renderIsWeekEnd (year: number, month: number, day: mixed) {
    if (!year || !month || typeof day !== 'number') return
    const weekDay = moment(`${year}/${month}/${day}`, 'YYYY/MM/D').format(
      'dddd'
    )
    return weekDay === 'Saturday' || weekDay === 'Sunday'
  }

  isToday (year: number, month: number, date: mixed) {
    if (!year || !month || typeof date !== 'number') return
    return (
      moment(`${year}-${month + 1}-${date}`, 'YYYY-MM-D').format(
        'YYYY-MM-DD'
      ) === moment().format('YYYY-MM-DD')
    )
  }

  renderDays () {
    const m = moment(this.props.date)
    const daysInMonth = m.daysInMonth()
    const year = m.year()
    const month = m.month()
    const startOnDayNr = moment(`${year}/${month}`, 'YYYY/MM').day()
    const days = []

    for (let i = 1; i < daysInMonth; i++) {
      days.push({
        date: i,
        occupied: false,
        status: '',
        weekend: this.renderIsWeekEnd(year, month, i),
        empty: false,
      })
    }

    for (let i = 1; i < startOnDayNr; i++) {
      days.unshift({
        date: null,
        occupied: false,
        status: '',
        weekend: false,
        empty: true,
      })
    }
    const emptyDaysAfter = 35 - days.length
    for (let i = 0; i < emptyDaysAfter; i++) {
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
        today={this.isToday(year, month, date)}
        weekend={weekend}
      />
    ))
  }

  handleSubmit = (event: Event) => {
    event.preventDefault()
    this.validateForm()
    const people = []

    this.state.people.forEach(p => {
      if (p.checked === true) {
        people.push(p.name)
      }
    })

    this.props.createVacation({
      arrival: this.state.arrival.value,
      departure: this.state.departure.value,
      people,
    })
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
    if (!errors.arrival.length) {
      errors.arrival =
        !validator.isISO8601(arrival) && 'Arrival must be a valid Date.'
    }
    errors.departure = !departure.length && 'Departure is required'
    if (!errors.departure.length) {
      errors.departure =
        !validator.isISO8601(departure) && 'Departure must be a valid Date.'
    }
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
          <Form onSubmit={this.handleSubmit} submitText="Add" title="New Trip">
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

export const mapStateToProps = ({ auth, date }: Object) => {
  return {
    auth,
    date,
  }
}

export default connect(mapStateToProps, { createVacation })(
  withRouter(Schedule)
)
