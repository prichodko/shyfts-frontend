import React, { Component } from 'react'
import BubbleAndData from './Payroll-BubbleAndData'

const PayrollDataElement = ({ heading, data }) => {
    return (
      <div className='lower__content'>
        <div className='payroll__heading'>
          {heading}
        </div>
        <div className='lower__line-element'>
          <BubbleAndData label='ALL' data={data[0]} color='#3DD281' />
          <BubbleAndData label='CHEFS' data={data[1]} color='#E63657' />
          <BubbleAndData label='MESSENGERS' data={data[2]} color='#FEE000' />
        </div>
      </div>
    )
}

export default PayrollDataElement
