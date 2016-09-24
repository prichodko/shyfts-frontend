import React, { Component } from 'react'

import Arrow from '../../assets/profile-arrow.svg'

class Profile extends Component {
  render () {
    const user = this.props.data.firstname + ' '  + this.props.data.lastname
    const initials = (this.props.data.firstname.charAt(0) + this.props.data.lastname.charAt(0)).toUpperCase()
    return (
      <div className='profile'>
        <div className='profile__avatar'>
          {initials}
        </div>
        <div className='profile__name'>
          {user}
        </div>
        <img src={Arrow} alt='' className='profile__arrow' />
      </div>
    )
  }
}

export default Profile
