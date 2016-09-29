import React, { Component } from 'react'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

import Modal from './Modal'
import UnassignedWhite from '../../assets/unassigned.svg'
import AssignedWhite from '../../assets/assigned.svg'
import UnassignedGray from '../../assets/unassigned-gray.svg'
import AssignedGray from '../../assets/assigned-gray.svg'
import Employee from './ShiftDetail-Employee'

import team from '../../data/team'

import '../../containers/App/App.css'

class ShiftDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      start: moment(this.props.start),
      end: moment(this.props.end),
      assigned: this.props.assigned || false,
      repeat: [
        { id: 'Mon', selected: true },
        { id: 'Tue', selected: false },
        { id: 'Wed', selected: false },
        { id: 'Thu', selected: false },
        { id: 'Fri', selected: false },
        { id: 'Sat', selected: false },
        { id: 'Sun', selected: false }
      ],
      employees: 1,
      assigned: team
    }
    this.handleRemoveEmployee = this.handleRemoveEmployee.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleSaveClick (e) {
    e.preventDefault()
    const shift = {
      start: this.state.start,
      end: this.state.end,
      assigned: this.state.assigned,
      employees: this.state.employees
    }
    this.props.onSave(shift)
  }

  handleRemoveEmployee () {
    console.log('FUCKED')
  }

  render () {

    const sortedTeam = team.sort((a, b) => a.lastname.localeCompare(b.lastname))
    let sortedChefs = []
    let sortedMessengers = []

    sortedTeam.forEach((member) => {
      if ( member.position === 'CHEFS') {
        sortedChefs = [...sortedChefs, member]
      } else {
        sortedMessengers = [...sortedMessengers, member]
      }
    })

    sortedChefs = sortedChefs.slice(0,2)
    sortedMessengers = sortedMessengers.slice(0,2)

    const shiftChefs = sortedChefs.map((chef, index) => {
      return <Employee firstname={chef.firstname} lastname={chef.lastname} color={chef.color} key={index} onRemoveEmployee={this.handleRemoveEmployee}/>
    })

    const shiftMessengers = sortedMessengers.map((messenger, index) => {
      return <Employee firstname={messenger.firstname} lastname={messenger.lastname} color={messenger.color} key={index}/>
    })

    const repeatingDays = this.state.repeat.map((value, index) => {
      const handleClick = () => {
        const repeat = this.state.repeat
        repeat[index].selected = !repeat[index].selected
        this.setState({ repeat: repeat })
      }
      return <button key={index} className={value.selected ? 'modal__repeat--active' : 'modal__repeat'} onClick={handleClick}>{value.id}</button>
    })

    return (
      <Modal isOpen={this.props.isOpen}>
        <div className='modal__content'>

          <div className={'modal__block'}>
            <h2 className='modal__heading'>Shift Detail</h2>
          </div>

          <div className='modal__block'>
            <div className='modal__group-bubble'>
              ALL
            </div>
          </div>

          <div className='modal__block'>
            <div className='modal__element'>
              <div className='modal__label'>
                From
              </div>
              <TimePicker showSecond={false} defaultValue={this.state.start} className='modal__input' />
            </div>

            <div>
              <div className='modal__label'>
                Until
              </div>
              <TimePicker showSecond={false} defaultValue={this.state.end} className='modal__input' />
            </div>
          </div>

          <div className='modal__block'>
            <div className='modal__element'>
              <div className='modal__label'>
                Repeat
              </div>
              <div className='modal__repeat-buttons-container'>
                {repeatingDays}
              </div>
            </div>
          </div>

          <div className='modal__block'>
            <div className='modal__element'>
            <div className='payroll__group-bubble' style={{ background: sortedChefs[0].color }}>
              CHEFS
            </div>
              {shiftChefs}
            </div>
            <div className='modal__element'>
            <div className='payroll__group-bubble' style={{ background: sortedMessengers[0].color }}>
              MESSENGERS
            </div>
              {shiftMessengers}
            </div>
          </div>

        </div>

        <div className='modal__buttons'>

          <button className='modal__button-cancel' onClick={this.props.onCancel}>
            Cancel
          </button>

          <button className='modal__button-save' onClick={this.handleSaveClick}>
            Save
          </button>

        </div>
      </Modal>
    )
  }
}

export default ShiftDetail
