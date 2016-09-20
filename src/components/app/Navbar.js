import React, { Component } from 'react'
import { Link } from 'react-router'

import Plus from '../../assets/plus.svg'

class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar__teamname'>
          <div>
            Ordr team Prague
          </div>
          <span className='navbar__group-bubble'>
            ALL
          </span>
        </div>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <Link to='/app' className='navbar__link'> Shifts
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/app/team' className='navbar__link'> Team
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/app/payroll' className='navbar__link'> Payroll
            </Link>
          </li>
        </ul>
        <div className='navbar__add-button'>
          <img src={Plus} />
        </div>
      </div>
    )
  }
}

export default Navbar
