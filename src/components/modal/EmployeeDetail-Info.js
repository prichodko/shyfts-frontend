import React from 'react'

import '../../containers/Team/Team.css'

const EmployeeDetailInfo = ({ label, data }) => {
  return (
    <div className='team-member__info'>
      <p className='team-member__info-data'>{data}</p>
      <p className='team-member__info-label'>{label.toUpperCase()}</p>
    </div>
  )
}

export default EmployeeDetailInfo
