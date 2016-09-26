import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import PayrollInfo from './Payroll-info'
import payrollData from '../../data/payroll'

import './Payroll.css'

class Payroll extends Component {
  render () {
    return (
      <div className='payroll'>


        <div className='payroll__content'>
          <div className='payroll__heading'>
            Payroll Overview
          </div>

          <div className='payroll__graphAndData'>
          <div className='payroll__block'>
          <LineChart width={490} height={290} data={payrollData} margin={{top: 5, right: 32, left: 0, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Line dataKey="ALL" stroke="#3DD281" />
            <Line dataKey="CHEFS" stroke="#E63657" />
            <Line dataKey="MESSENGERS" stroke="#FEE000" />
          </LineChart>
          </div>

          <div className='payroll__block'>
            <div className='payroll__line-element'>
              <div className='payroll__group-bubble' style={{ background: '#3DD281' }}>
                ALL
              </div>
              <div className='payroll__monthly-data'>
                <PayrollInfo label='August' data={payrollData[1].ALL} />
                <PayrollInfo label='September' data={payrollData[1].CHEFS} />
                <PayrollInfo label='OCTOBER EXPECTED' data={payrollData[1].MESSENGERS} />
              </div>
            </div>
            <div className='payroll__line-element'>
              <div className='payroll__group-bubble' style={{ background: '#E63657' }}>
                CHEFS
              </div>
              <div className='payroll__monthly-data'>
                <PayrollInfo label='August' data={payrollData[1].ALL} />
                <PayrollInfo label='September' data={payrollData[1].CHEFS} />
                <PayrollInfo label='OCTOBER EXPECTED' data={payrollData[1].MESSENGERS} />
              </div>
            </div>
            <div className='payroll__line-element'>
              <div className='payroll__group-bubble' style={{ background: '#FEE000' }}>
                MESSENGERS
              </div>
              <div className='payroll__monthly-data'>
                <PayrollInfo label='August' data={payrollData[1].ALL} />
                <PayrollInfo label='September' data={payrollData[1].CHEFS} />
                <PayrollInfo label='OCTOBER EXPECTED' data={payrollData[1].MESSENGERS} />
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Payroll
