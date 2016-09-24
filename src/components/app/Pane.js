import React, { Component } from 'react'

import AddGroup from '../../components/app/AddGroup'
import GroupList from '../../components/app/GroupList'
import Profile from '../../components/app/Profile'

import Logo from '../../assets/white-logo.svg'

class Pane extends Component {
  render () {
    return (
      <div className='pane-wrapper'>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        <AddGroup />
        <GroupList />
        <Profile data={this.props.data}/>
      </div>
    )
  }
}

export default Pane
