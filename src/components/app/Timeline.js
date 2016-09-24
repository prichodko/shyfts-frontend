import React, {Component} from 'react'

import HourItem from './HourItem'

const hours = []
for (var i = 0; i < 24; i++) {
  hours.push(i)
}

class Timeline extends Component {
  render () {
    const items = hours.map((value, index) => <HourItem key={index}> {value} </HourItem>)
    return (
      <div className='timeline'>
        <div className='timeline__day'>
          Day
        </div>
        <ul className='timeline__hourList'>
          {items}
        </ul>
      </div>
    )
  }
}

export default Timeline
