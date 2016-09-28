import React, { Component } from 'react'

class NameForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: ''
    }

    this.handleFirstnameChange = this.handleFirstnameChange.bind(this)
    this.handleLastnameChange = this.handleLastnameChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFirstnameChange (event) {
    this.setState({ firstname: event.target.value })
  }

  handleLastnameChange (event) {
    this.setState({ lastname: event.target.value })
  }

  handleClick (event) {
    event.preventDefault()
    const firstname = this.state.firstname.trim()
    const lastname = this.state.lastname.trim()
    this.props.onDataSubmit({ firstname: firstname, lastname: lastname })
    this.setState({ firstname: '', lastname: '' })
  }

  handleEnter (event) {
    const firstname = this.state.firstname.trim()
    const lastname = this.state.lastname.trim()
    this.props.onDataSubmit({ firstname: firstname, lastname: lastname })
    this.setState({ firstname: '', lastname: '' })
  }

  render () {
    return (
      <div className='form'>
        <div className='form-fields'>
          <h1 className='form-fields__heading'>What’s your name?</h1>
          <p className='form-fields__text'>
            Your name will be used for communication between you and your teammates.
          </p>
          <label className='form-fields__label'>
            Your Name
          </label>
          <div className='form-fields__input-wrapper'>
            <input
              className='form-fields__input form-fields__input--half-width'
              type='text'
              placeholder='First Name'
              onChange={this.handleFirstnameChange}
              onKeyDown={(event) => {if(event.which === 13 && (this.state.firstname && this.state.lastname)){this.handleEnter()}}} />
            <input
              className='form-fields__input form-fields__input--half-width'
              type='text'
              placeholder='Last Name'
              onChange={this.handleLastnameChange}
              onKeyDown={(event) => {if(event.which === 13 && (this.state.firstname && this.state.lastname)){this.handleEnter()}}} />
          </div>
        </div>
        <div className='main-footer'>
          <button disabled={!this.state.firstname || !this.state.lastname} className='main-footer__button' onClick={this.handleClick}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default NameForm
