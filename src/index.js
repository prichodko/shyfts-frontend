import React from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Signup from './containers/Signup'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/app' component={App}>
      <IndexRoute component={Calendar} />
      <Route path='team' component={Team} />
      <Route path='payroll' component={Payroll} />
    </Route>
    <Route path='/signup' component={Signup} />
  </Router>,
  document.getElementById('root')
)
