import React from 'react'

const GroupItem = (props) => {
  return (
    <li className='group-list__item' style={{ borderLeft: '3px solid ' + props.color }} onClick={() => console.log('clicked')}>
      {props.children}
    </li>
  )
}

export default GroupItem
