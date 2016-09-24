import React, { Component } from 'react'
import { Link } from 'react-router'

import Logo from '../../assets/logo.svg'
import TeamForm from '../../components/signup/TeamForm'
import NameForm from '../../components/signup/NameForm'
import Overview from '../../components/signup/Overview'
import PasswordForm from '../../components/signup/PasswordForm'
import Invites from '../../components/signup/Invites'

import './Singup.css'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 0,
      data: { teamname: '', firstname: '', lastname: '', password: '', invites: [] }
    }

    this.handleDataSubmit = this.handleDataSubmit.bind(this)
    this.handleSigningUp = this.handleSigningUp.bind(this)
  }

  getForm (step) {
    const forms = [
      { component: () => <TeamForm onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <NameForm onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <Overview data={this.state.data} onDataSubmit={this.handleDataSubmit} /> },
      { component: () => <PasswordForm onDataSubmit={this.handleDataSubmit} /> },
<<<<<<< HEAD:src/containers/Signup/Signup.js
      // { component: () => <Invites invites={this.state.data.invites} onSubmit={this.handleSigningUp} /> }
=======
>>>>>>> 3c93ba8c8a8b5c298ceae8d3c54a9f40e4b031d5:src/containers/Signup/Signup.js
      { component: () => <Invites onDataSubmit={this.handleDataSubmit}/> }
    ]

    return forms[step].component()
  }

  handleDataSubmit (data) {
    if (this.state.step < 4) {
      const updated = Object.assign({}, this.state.data, data)
      this.setState({ step: ++this.state.step, data: updated })
    } else {
      const updated = Object.assign({}, this.state.data, data)
      this.setState({ step: 0, data: updated })
    }

<<<<<<< HEAD:src/containers/Signup/Signup.js
  }

  handleSigningUp () {
    // save the user
    <Link to='/app' />
=======
>>>>>>> 3c93ba8c8a8b5c298ceae8d3c54a9f40e4b031d5:src/containers/Signup/Signup.js
  }

  render () {
    console.log(this.state)
    return (
      <div className='signup-container'>
        <div className='signup-main'>
          <div className='main-header'>
            <img src={Logo} className='main-header__logo' role="presentation"/>
          </div>
          {this.getForm(this.state.step)}
        </div>
        <div className='signup-secondary' />
      </div>
    )
  }
}

export default Signup
