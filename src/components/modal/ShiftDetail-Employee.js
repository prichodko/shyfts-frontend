import React from 'react'

import '../../containers/App/App.css'
import remove from '../../assets/remove.svg'

const Employee = ({ firstname, lastname, color, onRemoveEmployee}) => {
  const name = firstname + ' ' + lastname
  const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase()
  return (
    <div className='shift-detail__employee'>
      <div className='shift-detail__avatar' style={{ background : color }}>{initials}</div>
      <div className='shift-detail__name'>{name}</div>
      <div className='shift-detail__remove' onClick={onRemoveEmployee}><img src={remove} /></div>
    </div>
  )
}

export default Employee
