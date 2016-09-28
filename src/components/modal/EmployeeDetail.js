import React, { Component } from 'react'

import Modal from './Modal'
import Info from './EmployeeDetail-Info'

import '../../containers/Team/Team.css'

import Edit from '../../assets/edit-pencil.svg'

class EmployeeDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
        hourlyRate: this.props.selectedMember.hourlyRate,
        isEditable: false,
    }
    this.handleEnableEdit = this.handleEnableEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEnableEdit (event) {
    this.setState({ isEditable : !this.state.isEditable})
  }

  handleEdit (event) {
    this.setState({ hourlyRate: event.target.value })
  }

  render () {
    const { firstname, lastname, color, position, scheduledHours, daysOffLeft, currency, dateOfBirth, age } = this.props.selectedMember
    const name = firstname + ' ' + lastname
    const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase()
    return (
      <Modal isOpen={this.props.isOpen}>
        <div className='modal__team-content'>
          <div className='modal__team-avatar' style={{ background: color }}>
            {initials}
          </div>
          <div className='modal__team-heading'>
            {name}
          </div>
          <div className='modal__team-group' style={{ background: color }}>
            {position}
          </div>
          <div className='modal__team-info'>
            <Info label='Scheduled Hours' data={scheduledHours} />
            <Info label='Days Off Left' data={daysOffLeft} />
          </div>
          <div className='modal__team-info-with-edit'>
            <div className='team-member__info'>
              <input disabled={!this.state.isEditable} type='text' onKeyDown={(event) => {if(event.which === 13){this.handleEnableEdit()}}} onChange={this.handleEdit} defaultValue={this.state.hourlyRate}  className='team-member__input-info-data'/>
              <span className='team-member__info-data'>{currency}</span>
              <p className='team-member__info-label'>HOURLY RATE</p>
            </div>
            <img src={Edit} className='modal__team-edit' onClick={this.handleEnableEdit} role='presentation'/>
          </div>
          <div className='modal__team-info'>
            <Info label='Date of birth' data={dateOfBirth} />
            <Info label='age' data={age} />
          </div>
        </div>
        <div className='modal__team-buttons'>
          <button className='modal__team-button-cancel'onClick={this.props.onCancel}>
            Cancel
          </button>
          <button className='modal__team-button-save' style={{ background: color }} onClick={() => this.props.onSave(this.props.selectedMember.id, this.state.hourlyRate) }>
            Save
          </button>
        </div>
      </Modal>
    )
  }
}

export default EmployeeDetail
