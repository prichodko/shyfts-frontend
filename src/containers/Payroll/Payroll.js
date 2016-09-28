import React, { Component } from 'react'
import PayrollUpperContent from './Payroll-Upper-Content'
import PayrollLowerContent from './Payroll-Lower-Content'


import './Payroll.css'

class Payroll extends Component {
  render () {
    return (
      <div className='payroll'>
        <PayrollUpperContent />
        <PayrollLowerContent />
      </div>
    )
  }
}

export default Payroll
