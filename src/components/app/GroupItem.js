import React from 'react'

const GroupItem = ({ color, onClick, children }) => {
  return (
    <li className='group-list__item' style={{ borderLeft: '3px solid ' + color }} onClick={onClick} >
      {children}
    </li>
  )
}

export default GroupItem
