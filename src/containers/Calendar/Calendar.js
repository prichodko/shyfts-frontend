import React, { Component } from 'react'
import moment from 'moment'

import BigCalendar from '../../components/calendar'
import ShiftEvent from '../../components/calendar/ShiftEvent'
import NewShift from '../../components/modal/NewShift'

import eventsData from '../../data/events'

import './Calendar.css'

BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: eventsData,
      isNewShiftOpen: false,
      start: moment(),
      end: moment()
    }

    this.handleSelectSlot = this.handleSelectSlot.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleSelectSlot ({start, end}) {
    this.setState({ isNewShiftOpen: true, start: start, end: end })
  }

  handleSave (e) {
    e.preventDefault()
    // add new shift to this.state.events
  }

  handleCancel (e) {
    e.preventDefault()
    this.setState({ isNewShiftOpen: false })
  }

  render () {
    return (
      <div className='calendar-wrapper'>
        <BigCalendar
          events={this.state.events}
          selectable
          defaultView={'week'}
          views={['week']}
          eventPropGetter={(event) => ({ className: event.assigned ? 'rbc-event-assigned' : 'rbc-event-unassigned' })}
          onSelectSlot={this.handleSelectSlot}
          components={{ event: ShiftEvent }}
        />
        {this.state.isNewShiftOpen && <NewShift isOpen onSave={this.handleSave} onCancel={this.handleCancel} start={this.state.start} end={this.state.end} />}
      </div>
    )
  }
}

export default Calendar
