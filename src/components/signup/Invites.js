import React, { Component } from 'react'

class Invites extends Component {
  constructor (props) {
    super(props)
    this.state = { invites: '' }

    this.handleAdressChange = this.handleAdressChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleAdressChange (event) {
    this.setState({ invites: event.target.value })
  }

  handleClick (event) {
    event.preventDefault()
    const adress = this.state.invites.trim()
    // this.props.onDataSubmit({ invites: adress })
    this.setState({ invites: '' })
  }


  render () {
    const invites = this.props.invites.map((value, index) => {
      return (
        <input
          key={index}
          className='form-fields__input'
          type='email'
          placeholder='name@domain.com'
          onChange={this.handleAdressChange}/>
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
          <div className='form_fields__add-adress'>
          + Add another Email
          </div>
        </div>
        <div className='main-footer'>
        <div className='main-footer__button-wrapper'>
          <button className='main-footer__skip-button' onClick={this.handleSkip}>
            Skip for now
          </button>
          <button disabled={!this.state.invites} className='main-footer__button' onClick={this.handleClick}>
            Next
          </button>
        </div>
        </div>
      </div>
    )
  }
}

export default Invites
