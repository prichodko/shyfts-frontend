import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Signup from './containers/Signup/Signup'

import App from './containers/App/App'
import Calendar from './containers/Calendar/Calendar'
import Team from './containers/Team/Team'
import Payroll from './containers/Payroll/Payroll'
    // <IndexRoute component={Calendar} />


import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/app' component={App}>
      <IndexRoute component={Calendar} />
      <Route path='team' component={Team} />
      <Route path='payroll' component={Payroll} />
    </Route>
    <Route path='/' component={Signup} />
  </Router>,
  document.getElementById('root')
)
