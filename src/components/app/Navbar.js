import React, { Component } from 'react'
import { Link } from 'react-router'

class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar__teamname'>
          Ordr team Prague
        </div>
        <Link to='/app' className='navbar__item'>Shifts</Link>
        <Link to='/app/team' className='navbar__item'>Team</Link>
        <Link to='/app/payroll' className='navbar__item'>Payroll</Link>
        <div className='navbar__add-button'>+</div>
      </div>
    )
  }
}

export default Navbar
