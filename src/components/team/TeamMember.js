import React from 'react'

import Info from './Info'

const TeamMember = ({ data, onMemberSelect, index }) => {
  const { firstname, lastname, position, color, scheduledHours, hourlyRate, currency, daysOffLeft } = data
  const payment = hourlyRate + ' ' + currency
  const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase()
  const name = firstname + ' ' + lastname

  return (
    <div className='team-member' onClick={() => onMemberSelect(data)}>
      <div className='team-member__avatar' style={{ background: color }}>
        {initials}
      </div>
      <div className='team-member__data-wrapper'>
        <div className='team-member__name'>
          {name}
        </div>
        <span className='team-member__position' style={{ background: color }}>
          {position}
        </span>
        <div className='team-member__info-wrapper'>
          <Info label='Scheduled Hours' data={scheduledHours} />
          <Info label='Hourly Rate' data={payment} />
          <Info label='Days off left' data={daysOffLeft} />
        </div>
      </div>
    </div>
  )
}

export default TeamMember

//  <div className='team-member__position' style={{ background: color }}>
//         {position}
//       </div>
// <div className='team-member__avatar' style={{ background: color }}>
//         <div className='team-member__initials'>
//           {initials}
//         </div>
// </div>
