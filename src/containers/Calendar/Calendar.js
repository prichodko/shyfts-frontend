import React, { Component } from 'react'
import moment from 'moment'

import BigCalendar from '../../components/calendar'
import ShiftEvent from '../../components/calendar/ShiftEvent'
import NewShift from '../../components/modal/NewShift'
import Notification from '../../components/modal/Notification'

import roles from '../../constants/roles'
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
      end: moment(),
      notify: false
    }

    this.handleSelectSlot = this.handleSelectSlot.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleSelectSlot ({start, end}) {
    this.setState({ isNewShiftOpen: true, start: start, end: end })
  }

  handleSave (shift) {
    const events = this.state.events
    const newEvent = {
      title: 'Shift',
      start: shift.start.toDate(),
      end: shift.end.toDate(),
      assigned: shift.assigned,
      people: shift.employees,
      role: shift.role
    }
    events.push(newEvent)
    this.setState({ isNewShiftOpen: false, events: events })

    setTimeout(() => {
      const events = this.state.events
      events[events.length - 1].assigned = true
      this.setState({ events: events })

      setTimeout(() => {
        this.setState({ notify: true })
      }, 400)

      setTimeout(() => {
        this.setState({ notify: false })
      }, 4000)
    }, 5000)
  }

  handleCancel (e) {
    e.preventDefault()
    this.setState({ isNewShiftOpen: false })
  }
  
  getVisibleEvents () {
    const { role } = this.props
    const events = this.state.events

    switch (role) {
      case 'All': return events
      default: return events.filter(e => e.role === role)
    }
  }

  render () {
    const { role } = this.props
    const events = this.getVisibleEvents()

    return (
      <div className='calendar-wrapper'>
        <BigCalendar
          events={events}
          selectable
          defaultView={'week'}
          views={['week']}
          eventPropGetter={(event) => ({ className: event.assigned ? 'rbc-event-assigned' : 'rbc-event-unassigned', style: { backgroundColor: event.assigned && roles[role] }})}
          onSelectSlot={this.handleSelectSlot}
          components={{ event: ShiftEvent }}
        />
        {this.state.isNewShiftOpen && <NewShift isOpen onSave={this.handleSave} onCancel={this.handleCancel} role={role} start={this.state.start} end={this.state.end} />}
        {this.state.notify && <Notification name='Pavel Prichodko' message='has applied for the shift' color='#43D375' />}

      </div>
    )
  }
}

export default Calendar
