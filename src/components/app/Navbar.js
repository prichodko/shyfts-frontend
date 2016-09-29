import React, { Component } from 'react'
import { Link } from 'react-router'
import profileData from '../../data/profile'

import NewShift from '../modal/NewShift'
import Plus from '../../assets/plus.svg'
import roles from '../../constants/roles'

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
    this.setState({isNewShiftOpen: false})
  }

  handleSave (event) {
    event.preventDefault()
    this.setState({isNewShiftOpen: false})
  }

  render () {
    const team = profileData.teamname
    const { role } = this.props
    const bgColor = roles[role]
    return (
      <div className='navbar'>
        <div className='navbar__info'>
          <div className='navbar__teamname'>
            {team}
          </div>
          <span className='navbar__group-bubble' style={{backgroundColor: bgColor}} >{role}</span>
        </div>
        <div className='navbar__list'>
          <Link to='/app' className='navbar__link' activeStyle={{borderBottom: '0.2em solid ' + bgColor, fontWeight: '600'}} onlyActiveOnIndex> Shifts
          </Link>
          <Link to='/app/team' className='navbar__link' activeStyle={{borderBottom: '0.2em solid ' + bgColor, fontWeight: '600'}}> Team
          </Link>
          <Link to='/app/payroll' className='navbar__link' activeStyle={{borderBottom: '0.2em solid ' + bgColor, fontWeight: '600'}}> Payroll
          </Link>
        </div>
        <button className='navbar__add-button' onClick={this.handleNewShiftClick} style={{backgroundColor: bgColor}}>
          <img src={Plus} role='presentation' />
        </button>
        {this.state.isNewShiftOpen && <NewShift isOpen onCancel={this.handleCancel} onSave={this.handleSave} />}
      </div>
    )
  }
}

export default Navbar