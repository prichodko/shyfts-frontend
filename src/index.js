import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Signup from './containers/Signup/Signup'

import App from './containers/App/App'
// import Calendar from './containers/Calendar'
import Team from './containers/Team/Team'
// import Payroll from './containers/Payroll'
    // <IndexRoute component={Calendar} />

   // <Route path='payroll' component={Payroll} />

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/app' component={App}>
      <Route path='team' component={Team} />
    </Route>
    <Route path='/' component={Signup} />
  </Router>,
  document.getElementById('root')
)
