import React, { Component } from 'react'

class Invites extends Component {
  constructor (props) {
    super(props)
    this.state = { invites: ['', '', ''] }

    this.handleAdressChange = this.handleAdressChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleAddAdress = this.handleAddAdress.bind(this)
  }

  handleAdressChange (index, event) {
    var newInvites = this.state.invites.slice(0)
    newInvites[index] = event.target.value
    this.setState({ invites: newInvites })
  }

  handleClick (event) {
    event.preventDefault()
    const invites = this.state.invites
    this.props.onDataSubmit({ invites: invites })
    this.setState({ invites: ['', '', ''] })
  }

  handleAddAdress () {
    this.setState({invites: this.state.invites.concat([''])})
  }

  render () {
    const invites = this.state.invites.map((value, index) => {
      return (
        <input
          key={index}
          className='form-fields__input'
          type='email'
          placeholder='name@domain.com'
          onChange={this.handleAdressChange.bind(this, index)}/>
      )
    })

    return (
      <div className='form'>
        <div className='form-fields'>
          <h1 className='form-fields__heading'>Shyfts is better together</h1>
          <p className='form-fields__text'>
            Invite other people to get most out of Shyfts. Manage their shifts and free time.
          </p>
          <label className='form-fields__label'>
            Email Adress
          </label>
          {invites}
          <div className='form_fields__add-adress' onClick={this.handleAddAdress}>
            + Add another Email
          </div>
        </div>
        <div className='main-footer'>
            <button className='main-footer__skip-button'>
              Skip for now
            </button>
            <button disabled={!this.state.invites} className='main-footer__button' onClick={this.handleClick}>
              Next
            </button>
        </div>
      </div>
    )
  }
}

export default Invites
