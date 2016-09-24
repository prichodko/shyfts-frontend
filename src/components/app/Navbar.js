import React, { Component } from 'react'
import { Link } from 'react-router'

import NewShift from '../modal/NewShift'
import Plus from '../../assets/plus.svg'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isNewShiftOpen: false,
      isShiftDetailOpen: false
    }

    this.handleNewShiftClick = this.handleNewShiftClick.bind(this)
  }

  handleNewShiftClick () {
    this.setState({ isNewShiftOpen: true })
  }

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
        <button className='navbar__add-button' onClick={this.handleNewShiftClick}>
          <NewShift isOpen={this.state.isNewShiftOpen} />
          <img src={Plus} role='presentation' />
        </button>
      </div>
    )
  }
}

export default Navbar
