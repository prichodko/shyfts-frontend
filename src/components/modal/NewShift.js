import React, { Component } from 'react'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

import Modal from './Modal'
import UnassignedWhite from '../../assets/unassigned.svg'
import AssignedWhite from '../../assets/assigned.svg'
import UnassignedGray from '../../assets/unassigned-gray.svg'
import AssignedGray from '../../assets/assigned-gray.svg'

import '../../containers/App/App.css'

class NewShift extends Component {
  constructor (props) {
    super(props)

    this.state = {
      start: moment(this.props.start),
      end: moment(this.props.end),
      assigned: this.props.assigned || false,
      repeat: [
        { id: 'Mon', selected: false },
        { id: 'Tue', selected: false },
        { id: 'Wed', selected: false },
        { id: 'Thu', selected: false },
        { id: 'Fri', selected: false },
        { id: 'Sat', selected: false },
        { id: 'Sun', selected: false }
      ]
    }

    this.handleAssignability = this.handleAssignability.bind(this)
  }

  handleAssignability (event) {
    event.preventDefault()
    this.setState({ assigned: !this.state.assigned })
  }

  render () {
    const repeatingDays = this.state.repeat.map((value, index) => {
      return <button key={index} className={value.selected ? 'modal__repeat--active' : 'modal__repeat'} onClick={ () => {
        const repeat = this.state.repeat
        repeat[index].selected = !repeat[index].selected
        this.setState({ repeat: repeat })
      }}>{value.id}</button>
    })

    console.log('NEW', this.state)
    return (
      <Modal isOpen={this.props.isOpen}>
        <div className='modal__content'>

          <div className={'modal__block'}>
            <h2 className='modal__heading'>New Shift</h2>
          </div>

          <div className='modal__block'>
            <div className='modal__group-bubble'>
              ALL
            </div>
          </div>

          <div className='modal__block'>
            <button disabled={this.state.assigned} className={this.state.assigned ? 'model__assignability--active model__assignability-left' : 'model__assignability model__assignability-left'} onClick={this.handleAssignability}>
              <img src={this.state.assigned ? AssignedWhite : AssignedGray} className='model__assignability-img'/>
               Assigned
            </button>
            <button disabled={!this.state.assigned} className={this.state.assigned ? 'model__assignability  model__assignability-right' : 'model__assignability--active model__assignability-right'} onClick={this.handleAssignability}>
              <img src={!this.state.assigned ? UnassignedWhite : UnassignedGray} className='model__assignability-img'/>
              Unassigned
            </button>
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
              <div className='modal__label'>
                Repeat - Weeks
                </div>
                <input type='number' min={0} className='modal__person-counter' defaultValue={0} />
            </div>
            <div>
              <div className='modal__label'>
                Employees
                </div>
                <input type='number' min={0} className='modal__person-counter' defaultValue={1} />
            </div>
          </div>

        </div>

        <div className='modal__buttons'>

          <button className='modal__button-cancel' onClick={this.props.onCancel}>
            Cancel
          </button>

          <button className='modal__button-save' onClick={this.props.onSave}>
            Save
          </button>

        </div>
      </Modal>
    )
  }
}

export default NewShift
