import React from 'react'
import moment from 'moment'

import AssignedIcon from '../../assets/assigned.svg'
import UnassignedIcon from '../../assets/unassigned.svg'

const ShiftEvent = ({ event: { start, end, people, assigned } }) => {
  const startTime = moment(start).format('H:mm')
  const endTime = moment(end).format('H:mm')
  const diff = moment(end).diff(moment(start), 'hours')

  let peopleInfo
  if (diff > 1) {
    peopleInfo = (
      <div className='rbc-event-people'>
        <span>{people}</span>
        <img src={assigned ? AssignedIcon : UnassignedIcon} role='presentation' />
      </div>
    )
  }

  return (
    <div className='rbc-event-content-wrapper'>
      <div className='rbc-event-starttime'>
        {startTime}
      </div>
      {peopleInfo}
      <div className='rbc-event-endtime'>
        {endTime}
      </div>
    </div>
  )
}

export default ShiftEvent
