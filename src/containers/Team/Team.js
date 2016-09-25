import React, { Component } from 'react'
import TeamMember from '../../components/team/TeamMember'
import TeamDivider from '../../components/team/TeamDivider'
import teamData from '../../data/team'

import './Team.css'

class Team extends Component {
  render () {
    console.log(teamData)
    const team = teamData
    const sortedTeam = team.sort((a, b) => a.lastname.localeCompare(b.lastname))
    let sortedMembers = {}

    sortedTeam.forEach((member) => {
      const key = member.lastname.charAt(0)
      if (typeof (sortedMembers[key]) === 'undefined') {
        sortedMembers[key] = []
      }
      sortedMembers[key] = [...sortedMembers[key], member]
    })

    const Team = Object.keys(sortedMembers).map((key) => {
      const members = sortedMembers[key].map((member, index) => {
        return <TeamMember key={index} data={member} />
      })
      return (
        <div className='team__group' key={key}>
          <TeamDivider>
            {key}
          </TeamDivider>
          <div className='team__members-wrapper'>
            {members}
          </div>
        </div>
      )
    })

    return (
      <div className='team'>
        {Team}
      </div>
    )
  }
}

export default Team
