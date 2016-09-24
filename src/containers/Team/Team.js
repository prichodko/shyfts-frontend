import React, { Component } from 'react'
import TeamMember from '../../components/team/TeamMember'
import TeamDivider from '../../components/team/TeamDivider'
import TeamData from '../../data/team'


import './Team.css'

class Team extends Component {
  render () {
    const team = TeamData.team
    const sortedTeam = team.sort((a, b) => a.lastname.localeCompare(b.lastname))
    let membersWithDivider = {}

    sortedTeam.forEach((member) => {
      if (typeof(membersWithDivider[member.lastname.charAt(0)]) === 'undefined') {
        membersWithDivider[member.lastname.charAt(0)] = []
      }
      membersWithDivider[member.lastname.charAt(0)] = [...membersWithDivider[member.lastname.charAt(0)], member]
    })

    const jsxTeam = Object.keys(membersWithDivider).map((key) => {
      const members = membersWithDivider[key].map((member, index) => {
        return <TeamMember key={index} teamMember={member} />
      })
      return(
        <div className='team__group' key={key}>
          <TeamDivider>{key}</TeamDivider>
          <div className='team__members-wrapper'>
            {members}
          </div>
        </div>
      )
    })

    return (
      <div className='team'>
      {jsxTeam}
      </div>
    )
  }
}

export default Team
