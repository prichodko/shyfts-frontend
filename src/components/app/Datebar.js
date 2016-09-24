import React, { Component } from 'react'

import Arrow from '../../assets/planner-arrow.svg'
import Calendar from '../../assets/calendar.svg'

class Datebar extends Component {
  render () {
    const moment = require('moment');
    const startOfWeek = {
      day: moment().startOf('week').format('D'),
      month: moment().startOf('week').format('MMM'),
      year: moment().startOf('week').format('YYYY')
    }
    const endOfWeek = {
      day: moment().endOf('week').format('D'),
      month: moment().endOf('week').format('MMM'),
      year: moment().endOf('week').format('YYYY'),
    }

    function getDate(startOfWeek, endOfWeek) {
      if (startOfWeek.year === endOfWeek.year) {
        if (startOfWeek.month === endOfWeek.month) {
          return ( {  date: startOfWeek.day + ' - ' + endOfWeek.day,
                      monthAndYear : startOfWeek.month + ' ' + startOfWeek.year } )
        } else {
          return ( {  date: startOfWeek.day + ' ' + startOfWeek.month + ' - ' + endOfWeek.day + ' ' + endOfWeek.month,
                      monthAndYear : startOfWeek.year } )
        }
      } else {
        return ( {  date: startOfWeek.day + ' ' + startOfWeek.month + ' ' + startOfWeek.year + ' - ' + endOfWeek.day + ' ' + endOfWeek.month + ' ' + endOfWeek.year,
                    monthAndYear : null } )
      }
    }

    return (
      <div className='datebar'>
        <div className='date-navigation'>
          <div className='date-navigation__arrow-previous'>
            <img src={Arrow} className='date-navigation__img'role="presentation"/>
          </div>
          <div className='date-navigation__calendar'>
            <img src={Calendar} className='date-navigation__img'role="presentation"/>
          </div>
          <div className='date-navigation__arrow-next'>
            <img src={Arrow} className='date-navigation__img'role="presentation"/>
          </div>
        </div>
          <span className='datebar__weeks'>
            {getDate(startOfWeek, endOfWeek).date}
          </span>
          <span className='datebar__monthAndYear'>
          {getDate(startOfWeek, endOfWeek).monthAndYear}
          </span>
      </div>
    )
  }
}

export default Datebar
