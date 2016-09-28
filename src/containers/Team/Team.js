import React, { Component } from 'react'
import TeamMember from '../../components/team/TeamMember'
import TeamDivider from '../../components/team/TeamDivider'
import teamData from '../../data/team'
import EmployeeDetail from '../../components/modal/EmployeeDetail'


import './Team.css'

class Team extends Component {
  constructor (props) {
    super(props)
    this.state = {
      team: teamData,
      isNewMemberOpen: false,
      isMemberDetailOpen: false,
      selectedMember: {},
      role: 'ALL',
    }

    this.handleMemberClick = this.handleMemberClick.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleMemberClick (member, index) {
    this.setState({
      isMemberDetailOpen: true,
      selectedMember: member,
    })
  }

  handleCancel (event) {
    event.preventDefault()
    this.setState({
      isMemberDetailOpen : false,
      selectedMember: {}
    })
  }

  handleSave (id, hourlyRate) {
    const team = this.state.team
    team.forEach(member => {
      if (member.id === id) {
        member.hourlyRate = hourlyRate
      }
    })

    this.setState({
      isMemberDetailOpen : false,
      selectedMember: {},
      team: team
    })
  }


  render () {
    const team = this.state.team
    const sortedTeam = team.sort((a, b) => a.lastname.localeCompare(b.lastname))
    let sortedMembers = {}

    sortedTeam.forEach((member) => {
      if ( this.state.role === 'ALL' ) {
        const key = member.lastname.charAt(0)
        if (typeof (sortedMembers[key]) === 'undefined') {
          sortedMembers[key] = []
        }
        sortedMembers[key] = [...sortedMembers[key], member]
      } else if ( member.position === this.state.role) {
        const key = member.lastname.charAt(0)
        if (typeof (sortedMembers[key]) === 'undefined') {
          sortedMembers[key] = []
        }
        sortedMembers[key] = [...sortedMembers[key], member]
      }
    })

    const Team = Object.keys(sortedMembers).map((key) => {
      const members = sortedMembers[key].map((member, index) => {
        return <TeamMember key={index} index={member.id} data={member} onMemberSelect={this.handleMemberClick}/>
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
        {Object.keys(this.state.selectedMember).length === 0 && this.state.selectedMember.constructor === Object ? null : <EmployeeDetail isOpen={this.state.isMemberDetailOpen} selectedMember={this.state.selectedMember} onSave={this.handleSave} onCancel={this.handleCancel}/> }
      </div>
    )
  }
}

export default Team
