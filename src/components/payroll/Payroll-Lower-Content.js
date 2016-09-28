import React, { Component } from 'react'
import BubbleAndData from './Payroll-BubbleAndData'
import PayrollDataElement from './Payroll-DataElement'

class PayrollLowerContent extends Component {
  render () {
    return (
      <div className='payroll__lower'>

        <div className='lower__block'>
          <PayrollDataElement heading='Hours' data={[647,346,301]} />
          <PayrollDataElement heading='Hours Budgeted' data={[912,548,364]} />
        </div>

        <div className='lower__block'>
          <PayrollDataElement heading='Shifts' data={[80,37,43]} />
          <PayrollDataElement heading='Pay Budgeted' data={['270.400 CZK','124.200 CZK','146.200 CZK']} />
        </div>

      </div>
    )
  }
}

export default PayrollLowerContent
