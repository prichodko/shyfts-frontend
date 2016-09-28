import React from 'react'

const BubbleAndData = ({ label, data, color }) => {
  return (
    <div className='bubble-and-data'>
      <div className='bubble-and-data__container'>
        <div className='payroll__group-bubble' style={{ background: color }}>
          {label.toUpperCase()}
        </div>
        <div className='payroll__info-data'>{data}</div>
      </div>
    </div>
  )
}

export default BubbleAndData
