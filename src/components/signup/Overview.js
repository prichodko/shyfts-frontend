import React, { Component } from 'react'

class Overview extends Component {
  constructor (props) {
    super(props)

    this.state = {
      teamname: this.props.data.teamname,
      firstname: this.props.data.firstname,
      lastname: this.props.data.lastname
    }

    this.handleTeamnameChange = this.handleTeamnameChange.bind(this)
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this)
    this.handleLastnameChange = this.handleLastnameChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleTeamnameChange (event) {
    this.setState({ teamname: event.target.value })
  }

  handleFirstnameChange (event) {
    this.setState({ firstname: event.target.value })
  }

  handleLastnameChange (event) {
    this.setState({ lastname: event.target.value })
  }

  handleClick (event) {
    event.preventDefault()
    const teamname = this.state.teamname.trim()
    const firstname = this.state.firstname.trim()
    const lastname = this.state.lastname.trim()
    this.props.onDataSubmit({ teamname: teamname, firstname: firstname, lastname: lastname })
    this.setState({ teamname: '', firstname: '', lastname: '' })
  }

  render () {
    return (
      <div className='form'>
        <div className='form-fields'>
          <h1 className='form-fields__heading'>Confirm your details</h1>
          <div className='form-fields__overview-item'>
            <label className='form-fields__label'>
              Company name
            </label>
            <input
              type='text'
              className='form-fields__overview-input'
              autoFocus
              value={this.state.teamname}
              onChange={this.handleTeamnameChange} />
          </div>
          <div className='form-fields__overview-item'>
            <label className='form-fields__label'>
              Your name
            </label>
            <input
              type='text'
              className='form-fields__overview-input'
              value={this.state.firstname}
              onChange={this.handleFirstnameChange} />
          </div>
          <div className='form-fields__overview-item'>
            <input
              type='text'
              className='form-fields__overview-input'
              value={this.state.lastname}
              onChange={this.handleLastnameChange} />
          </div>
        </div>
        <div className='main-footer'>
          <button className='main-footer__button' onClick={this.handleClick}>
            Create New Team
          </button>
        </div>
      </div>
    )
  }
}

export default Overview
