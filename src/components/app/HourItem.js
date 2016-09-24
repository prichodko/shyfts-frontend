import React from 'react'

const HourItem = (props) => {
  return (
    <li className='timeline__hourItem'>
      {props.children}
    </li>
  )
}

export default HourItem
