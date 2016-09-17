import React, { Component } from 'react'

class PasswordForm extends Component {
  constructor (props) {
    super(props)
    this.state = { password: '' }
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
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
            value={this.state.password}
            onChange={this.handlePasswordChange} />
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
