import React, { Component } from 'react'

class TeamForm extends Component {
  constructor (props) {
    super(props)
    this.state = { teamname: '' }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleNameChange (event) {
    this.setState({ teamname: event.target.value })
  }

  handleClick (event) {
    event.preventDefault()
    const teamname = this.state.teamname.trim()
    this.props.onDataSubmit({ teamname: teamname })
    this.setState({ teamname: '' })
  }

  handleEnter (event) {
    const teamname = this.state.teamname.trim()
    this.props.onDataSubmit({ teamname: teamname })
    this.setState({ teamname: '' })
  }

  render () {
    return (
      <div className='form'>
        <div className='form-fields'>
          <h1 className='form-fields__heading'>How do you want to call your team?</h1>
          <p className='form-fields__text'>
            Your name will be used for communication between you and your teammates.
          </p>
          <label className='form-fields__label'>
            Company name
          </label>
          <input
            className='form-fields__input'
            type='text'
            placeholder='Tony’s Café, Legible Inc...'
            onChange={this.handleNameChange}
            autoFocus
            onKeyDown={(event) => {if(event.which === 13 && this.state.teamname){this.handleEnter()}}} />
        </div>
        <div className='main-footer'>
          <button disabled={!this.state.teamname} className='main-footer__button' onClick={this.handleClick}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default TeamForm
