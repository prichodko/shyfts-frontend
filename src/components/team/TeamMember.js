import React from 'react';

const TeamMember = (props) => {
  const { firstname, lastname, position, color, scheduledHours, hourlyRate, currency, daysOffLeft } = props.teamMember
  const payment = hourlyRate + ' ' + currency
  const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase()
  const name = firstname + ' ' +lastname



  return (
    <div className='team-member'>
      <div className='team-member__avatar' style={{ background: color }}>
        <div className='team-member__initials'>{initials}</div>
      </div>
      <div className='data-wrapper'>
        <div className='name'> {name} </div>
        <div className='position' style={{ background: color }}> {position} </div>
        <div className='info'>
          <div className='info-wrapper'>
            <div className='info-wrapper__data'> {scheduledHours} </div>
            <div className='info-wrapper__label'> SCHEDULED HOURS </div>
          </div>
          <div className='info-wrapper'>
            <div className='info-wrapper__data'> {payment} </div>
            <div className='info-wrapper__label'> HOURLY RATE </div>
          </div>
          <div className='info-wrapper'>
            <div className='info-wrapper__data'> {daysOffLeft} </div>
            <div className='info-wrapper__label'> DAYS OFF LEFT </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
