import React, { Component } from 'react'
import { Link } from 'react-router'

import Plus from '../../assets/plus.svg'

class Navbar extends Component {

  render () {
    const team = this.props.data.teamname
    return (
      <div className='navbar'>
        <div className='navbar__info'>
          <div className='navbar__teamname'>
            {team}
          </div>
          <span className='navbar__group-bubble'>ALL</span>
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
