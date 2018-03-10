import React from 'react'
import { Link } from 'react-router-dom'

import H1 from '../../components/H1'
import H3 from '../../components/H3'
import Day from './Day'
import Form from '../../components/Form'
import Icon from '../../components/Icon'
import Input from '../../components/Form/Input'

import './Schedule.css'

export default () => (
  <section className="schedule">
    <H1>January</H1>
    <nav className="time-nav">
      <Link to="/">
        <Icon 
          marginRight
          name="arrow-circle-left" 
          size="3x" />December 2017
      </Link>
      <Link to="/">
        February<Icon marginLeft 
          name="arrow-circle-right" 
          size="3x" /> 
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
        <Day date={1} occupied status="Arrival" />
        <Day date={2} occupied status="Occupied" />
        <Day date={3} occupied status="Occupied" />
        <Day date={4} occupied status="Occupied" />
        <Day date={5} occupied status="Occupied" />
        <Day date={6} occupied status="Occupied" weekend />
        <Day date={7} occupied status="Departure" weekend />

        <Day date={8} />
        <Day date={9} />
        <Day date={10} />
        <Day date={11} />
        <Day date={12} />
        <Day date={13} weekend />
        <Day date={14} weekend />

        <Day date={15} />
        <Day date={16} />
        <Day date={17} />
        <Day date={18} />
        <Day date={19} />
        <Day date={20} weekend />
        <Day date={21} weekend />

        <Day date={22} />
        <Day date={23} />
        <Day date={24} />
        <Day date={25} />
        <Day date={26} />
        <Day date={27} weekend />
        <Day date={28} weekend />

        <Day date={29} />
        <Day date={30} />

        <Day empty />
        <Day empty />
        <Day empty />
        <Day empty />
        <Day empty />
      </main>
    </section>

    <Form>
      <H3>Content</H3>
      <Input label="Test" name="test" placeholder="placeholder" />
    </Form>
  </section>
)
