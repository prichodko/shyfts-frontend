import React from 'react'

const PayrollInfo = ({ label, data }) => {
  return (
    <div className='payroll__info'>
      <p className='payroll__info-data'>{data} CZK</p>
      <p className='payroll__info-label'>{label.toUpperCase()}</p>
    </div>
  )
}

export default PayrollInfo
