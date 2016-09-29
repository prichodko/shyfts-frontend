import React, { Component } from 'react'
import moment from 'moment'

import BigCalendar from '../../components/calendar'
import ShiftEvent from '../../components/calendar/ShiftEvent'
import NewShift from '../../components/modal/NewShift'
import ShiftDetail from '../../components/modal/ShiftDetail'

import eventsData from '../../data/events'

import './Calendar.css'

BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: eventsData,
      isNewShiftOpen: false,
      isShiftDetailOpen: false,
      start: moment(),
      end: moment()
    }

    this.handleSelectSlot = this.handleSelectSlot.bind(this)
    this.handleSelectEvent = this.handleSelectEvent.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleSelectSlot ({start, end}) {
    this.setState({ isNewShiftOpen: true, start: start, end: end })
  }

  handleSelectEvent ({start, end}) {
    this.setState({ isShiftDetailOpen: true, start: start, end: end })    
  }

  handleSave (shift) {
    const events = this.state.events
    const newEvent = {
      title: 'Shift',
      start: shift.start.toDate(),
      end: shift.end.toDate(),
      assigned: shift.assigned,
      people: shift.employees
    }

    events.push(newEvent)

    console.log('NEW EVENT', newEvent)
    console.log('OLD EVENTS', events)

    this.setState({ isNewShiftOpen: false, events: events })
  }

  handleCancel (e) {
    e.preventDefault()
    this.setState({ isNewShiftOpen: false, isShiftDetailOpen: false })
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
          onSelectEvent={this.handleSelectEvent}
          onSelectSlot={this.handleSelectSlot}
          components={{ event: ShiftEvent }}
        />
        {this.state.isNewShiftOpen && <NewShift isOpen onSave={this.handleSave} onCancel={this.handleCancel} start={this.state.start} end={this.state.end} />}
        {this.state.isShiftDetailOpen && <ShiftDetail isOpen onCancel={this.handleCancel} start={this.state.start} end={this.state.end} />}
      </div>
    )
  }
}

export default Calendar
