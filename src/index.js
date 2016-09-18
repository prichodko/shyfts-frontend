import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App/App'
import Signup from './containers/Signup'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/app' component={App} />
    <Route path='/signup' component={Signup} />
  </Router>,
  document.getElementById('root')
)
