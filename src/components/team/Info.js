import React from 'react'

const Info = ({ label, data }) => {
  return (
    <div className='team-member__info'>
      <p className='team-member__info-data'>{data}</p>
      <p className='team-member__info-label'>{label.toUpperCase()}</p>
    </div>
  )
}

export default Info

// <div className='info'>
//           <div className='info-wrapper'>
//             <div className='info-wrapper__data'>
//               {scheduledHours}
//             </div>
//             <div className='info-wrapper__label'>
//               SCHEDULED HOURS
//             </div>
//           </div>
//           <div className='info-wrapper'>
//             <div className='info-wrapper__data'>
//               {payment}
//             </div>
//             <div className='info-wrapper__label'>
//               HOURLY RATE
//             </div>
//           </div>
//           <div className='info-wrapper'>
//             <div className='info-wrapper__data'>
//               {daysOffLeft}
//             </div>
//             <div className='info-wrapper__label'>
//               DAYS OFF LEFT
//             </div>
//           </div>
//         </div>