import React, { Component } from 'react'

import GroupItem from './GroupItem'

const groups = [
  { title: 'Green Group', color: '#3DD281' },
  { title: 'Blue Group', color: '#4094FC' },
  { title: 'Red Group', color: '#E63657' },
  { title: 'Orange Group', color: '#FBA426' },
  { title: 'Yellow Group', color: '#FEE000' },
  { title: 'Purple Group', color: '#6052FF' },
  { title: 'Levander Group', color: '#BC86FF' }
]

class GroupList extends Component {
  render () {
    const items = groups.map((value, index) => <GroupItem key={index} color={value.color}> {value.title} </GroupItem>)
    return (
      <ul className='group-list'>
        {items}
      </ul>
    )
  }
}

export default GroupList
