import React, { Component } from 'react'

import Logo from '../assets/logo.svg'
import TeamForm from '../components/signup/TeamForm'
import NameForm from '../components/signup/NameForm'
import Overview from '../components/signup/Overview'
import PasswordForm from '../components/signup/PasswordForm'
import Invites from '../components/signup/Invites'

import './Singup.css'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0,
      data: { teamname: '', firstname: '', lastname: '', password: '', invites: '' }
    }

    this.handleDataSubmit = this.handleDataSubmit.bind(this)
  }

  getForm (step) {
    const forms = [
      { component: () => <TeamForm onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <NameForm onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <Overview data={this.state.data} onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <PasswordForm onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <Invites />}
    ]

    return forms[step].component()
  }

  handleDataSubmit (data) {
    const updated = Object.assign({}, this.state.data, data)
    this.setState({ step: ++this.state.step, data: updated })
  }

  render () {
    console.log(this.state)
    return (
      <div className='signup-container'>
        <div className='signup-main'>
          <div className='main-header'>
            <img src={Logo} className='main-header__logo' />
          </div>
          {this.getForm(this.state.step)}
        </div>
        <div className='signup-secondary' />
      </div>
    )
  }
}

export default Signup
