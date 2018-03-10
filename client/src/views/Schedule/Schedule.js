// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import H1 from '../../components/H1'
import H3 from '../../components/H3'
import Day from './Day/index'
import Form from '../../components/Form'
import Icon from '../../components/Icon'
import Input from '../../components/FormInput'

import './Schedule.css'

type Props = {
  
}

export class Schedule extends Component<Props> {

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

    return days.map(({ date, empty, occupied, status, weekend }, i) => <Day 
      date={date} 
      empty={empty} 
      key={`day-${i}`} 
      occupied={occupied} 
      status={status} 
      weekend={weekend} 
    />)
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
          <main className="calendar__days">
            {this.renderDays()}
          </main>
        </section>

        <Form>
          <H3>Content</H3>
          <Input label="Test" name="test" placeholder="placeholder" />
        </Form>
      </section>
    )
  }
}

export default Schedule
