import React, { Component } from 'react'

import Arrow from '../../assets/profile-arrow.svg'

class Profile extends Component {
  render () {
    return (
      <div className='profile'>
        <div className='profile__avatar' />
        <div className='profile__name'>
          Jakub Nespor
        </div>
        <img src={Arrow} alt='' />
      </div>
    )
  }
}

export default Profile
