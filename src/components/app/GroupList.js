import React, { Component } from 'react'

import GroupItem from './GroupItem'
import roles from '../../data/roles'


class GroupList extends Component {
  render () {
    const items = roles.map((value, index) => <GroupItem key={index} color={value.color}> {value.role} </GroupItem>)
    return (
      <ul className='group-list'>
        {items}
      </ul>
    )
  }
}

export default GroupList
