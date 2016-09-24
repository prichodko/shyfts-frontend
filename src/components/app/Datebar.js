import React, { Component } from 'react'


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
        <span className='datebar__weeks'>
          {getDate(startOfWeek, endOfWeek).date}
        </span>
        {getDate(startOfWeek, endOfWeek).monthAndYear}
      </div>
    )
  }
}

export default Datebar
