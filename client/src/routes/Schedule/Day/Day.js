// @flow

import React from 'react'
import styled from 'styled-components'

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

const DayWrapper = styled.article`
  background-color: ${({ empty, theme }) =>
    empty ? theme.colors.white : theme.colors.grayLighter};
  font-family: ${({ theme }) => theme.typography.fontDefault};
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid
    ${({ occupied, theme }) =>
      occupied ? theme.colors.dangerLight : theme.colors.grayLighter};

  color: ${({ theme, weekend }) =>
    weekend ? theme.colors.dangerLight : theme.colors.grayLight};

  border: ${({ theme, today }) =>
    today && '1px dashed ' + theme.colors.primary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

const Date = styled.div`
  margin: 0.75rem;
`

const People = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.5rem;
`

const Status = styled.div`
  font-family: 'Avenir Next', sans-serif;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;

  color: ${({ occupied, theme }) => occupied ? theme.colors.white : 'transparent'};
  background: ${({ occupied, theme }) => occupied ? theme.colors.dangerLight : 'transparent'};
`

const Day = ({
  date,
  empty,
  occupied,
  people,
  status,
  today,
  weekend,
}: props) => (
  <DayWrapper empty={empty} occupied={occupied} today={today} weekend={weekend}>
    <Date>{date}</Date>
    <People>
      {people &&
        people.map(person => {
          return <div>{person.name}</div>
        })}
    </People>
    <Status occupied={occupied}>{status}</Status>
  </DayWrapper>
)

export default Day
