import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

import PayrollInfo from './Payroll-info'
import payrollData from '../../data/payroll'


const insertChar = (num, char) => {
  let string = num.toString()
  return string.slice(0, string.length-3) + char + string.slice(string.length-3 ,string.length)
}

class PayrollUpperContent extends Component {
  render () {
    return (
        <div className='payroll__content'>

          <div className='payroll__heading'>
            Payroll Overview
          </div>

          <div className='payroll__graphAndData'>
            <div className='payroll__block'>
            <ResponsiveContainer>
              <LineChart data={payrollData} margin={{top: 5, right: 32, left: 0, bottom: 0}}>
                <XAxis tickLine={false} dataKey="name"/>
                <YAxis tickLine={false}/>
                <Line dataKey="ALL" stroke="#3DD281" strokeWidth='3' dot={{strokeWidth: 2}} animationDuration={800} animationEasing='ease-in' />
                <Line dataKey="CHEFS" stroke="#E63657" strokeWidth='3' dot={{strokeWidth: 2}} animationDuration={800} animationEasing='ease-in'/>
                <Line dataKey="MESSENGERS" stroke="#FEE000" strokeWidth='3' dot={{strokeWidth: 2}} animationDuration={800} animationEasing='ease-in'/>
                <Line dataKey="ALLDashed" stroke="#3DD281" strokeWidth='1' dot={false, {strokeWidth: 2, strokeDasharray: "0"}} strokeDasharray="5 5"/>
                <Line dataKey="CHEFSDashed" stroke="#E63657" strokeWidth='1' dot={{strokeWidth: 2, strokeDasharray: "0"}} strokeDasharray="5 5"/>
                <Line dataKey="MESSENGERSDashed" stroke="#FEE000" strokeWidth='1' dot={{ strokeWidth: 2, strokeDasharray: "0"}} strokeDasharray="5 5"/>
              </LineChart>
            </ResponsiveContainer>
            </div>

            <div className='payroll__block'>
              <div className='payroll__line-element'>
                <div className='payroll__group-bubble' style={{ background: '#3DD281' }}>
                  ALL
                </div>
                <div className='payroll__monthly-data'>
                  <PayrollInfo label='August' data={insertChar(payrollData[1].ALL, '.')} />
                  <PayrollInfo label='September' data={insertChar(payrollData[2].ALL, '.')} />
                  <PayrollInfo label='OCTOBER EXPECTED' data={insertChar(payrollData[3].ALLDashed, '.')} />
                </div>
              </div>
              <div className='payroll__line-element'>
                <div className='payroll__group-bubble' style={{ background: '#E63657' }}>
                  CHEFS
                </div>
                <div className='payroll__monthly-data'>
                  <PayrollInfo label='August' data={insertChar(payrollData[1].CHEFS, '.')} />
                  <PayrollInfo label='September' data={insertChar(payrollData[2].CHEFS, '.')} />
                  <PayrollInfo label='OCTOBER EXPECTED' data={insertChar(payrollData[3].CHEFSDashed, '.')} />
                </div>
              </div>
              <div className='payroll__line-element'>
                <div className='payroll__group-bubble' style={{ background: '#FEE000' }}>
                  MESSENGERS
                </div>
                <div className='payroll__monthly-data'>
                  <PayrollInfo label='August' data={insertChar(payrollData[1].MESSENGERS, '.')} />
                  <PayrollInfo label='September' data={insertChar(payrollData[2].MESSENGERS, '.')} />
                  <PayrollInfo label='OCTOBER EXPECTED' data={insertChar(payrollData[3].MESSENGERSDashed, '.')} />
                </div>
              </div>
            </div>
          </div>

        </div>
    )
  }
}

export default PayrollUpperContent
