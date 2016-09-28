import React from 'react'

import '../../containers/App/App.css'

const Employee = ({ firstname, lastname, color}) => {
  const name = firstname + ' ' + lastname
  const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase()
  return (
    <div className='shiftDetail__employee'>
      <span className='profile__avatar' style={{ background : color }}>{initials}</span>
      <span className='shiftDetail-employee__name'>{name}</span>
    </div>
  )
}

export default Employee
