import React, { Component } from 'react'
import { Link } from 'react-router'
import profileData from '../../data/profile'

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
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleNewShiftClick () {
    this.setState({ isNewShiftOpen: true })
  }

  handleCancel (event) {
    event.preventDefault()
    this.setState({isNewShiftOpen : false})
  }

  handleSave (event) {
    event.preventDefault()
    this.setState({isNewShiftOpen : false})
  }

  render () {
    const team = profileData.teamname
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
          <img src={Plus} role='presentation' />
        </button>
         {this.state.isNewShiftOpen && <NewShift isOpen onCancel={this.handleCancel} onSave={this.handleSave} />}
      </div>
    )
  }
}

export default Navbar
