import React, { Component } from 'react'
import profileData from '../../data/profile'

import Arrow from '../../assets/profile-arrow.svg'

class Profile extends Component {
  render () {
    const user = profileData.firstname + ' ' + profileData.lastname
    const initials = (profileData.firstname.charAt(0) + profileData.lastname.charAt(0)).toUpperCase()
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
