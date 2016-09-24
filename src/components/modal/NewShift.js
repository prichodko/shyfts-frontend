import React, { Component } from 'react'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

import Modal from './Modal'

class NewShift extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fromTime: this.props.fromTime || moment(),
      toTime: this.props.toTime || moment(),
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
    return (
      <Modal isOpen={this.props.isOpen}>
        <div className='modal__content'>
          <div className='modal__heading'>
            New Shift
          </div>
          <div className='modal__group'>
            ALL
          </div>
          <div className='modal__addon'>
            <button className={this.state.assigned ? 'model__assignability--active' : 'model__assignability'} onClick={this.handleAssignability}>
              Assigned
            </button>
            <button className={this.state.assigned ? 'model__assignability' : 'model__assignability--active'} onClick={this.handleAssignability}>
              Unassigned
            </button>
          </div>
          <div className='modal__addon'>
            <div className='modal__item'>
              <div className='modal__label'>
                From
              </div>
              <TimePicker showSecond={false} defaultValue={this.state.toTime} className='modal__input' />
            </div>
            <div className='modal__item'>
              <div className='modal__label'>
                To
              </div>
              <TimePicker showSecond={false} defaultValue={this.state.toTime} className='modal__input' />
            </div>
          </div>
          <div>
            <div className='modal__label'>
              Person
            </div>
            <input type='number' />
          </div>
        </div>
        <div className='modal__buttons'>
          <button className='modal__button-cancel'>
            Cancel
          </button>
          <button className='modal__button-save'>
            Save
          </button>
        </div>
      </Modal>
    )
  }
}

export default NewShift
