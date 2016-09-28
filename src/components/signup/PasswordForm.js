import React, { Component } from 'react'

class PasswordForm extends Component {
  constructor (props) {
    super(props)
    this.state = { password: '' }

    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  handleClick (event) {
    event.preventDefault()
    const password = this.state.password.trim()
    this.props.onDataSubmit({ password: password })
    this.setState({ password: '' })
  }

  handleEnter (event) {
    const password = this.state.password.trim()
    this.props.onDataSubmit({ password: password })
    this.setState({ password: '' })
  }

  render () {
    return (
      <div className='form'>
        <div className='form-fields'>
          <h1 className='form-fields__heading'>Create your password</h1>
          <p className='form-fields__text'>
            Your password must be at least 6 characters long.
          </p>
          <label className='form-fields__label'>
            Your Password
          </label>
          <input
            className='form-fields__input'
            type='password'
            placeholder='Password'
            autoFocus
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onKeyDown={(event) => {if(event.which === 13 && this.state.password.length >= 6){this.handleEnter()}}} />
        </div>
        <div className='main-footer'>
          <button disabled={this.state.password.length < 6} className='main-footer__button' onClick={this.handleClick}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default PasswordForm
