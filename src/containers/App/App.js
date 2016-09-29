import React, { Component } from 'react'

import Pane from '../../components/app/Pane'
import Canvas from '../../components/app/Canvas'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      role: 'All'
    }

    this.handleRoleChange = this.handleRoleChange.bind(this)
  }

  handleRoleChange (role) {
    this.setState({ role: role })
  }

  render () {
    const { children } = this.props
    return (
      <div className='app-container'>
        <Pane onRoleChange={this.handleRoleChange} />
        <Canvas role={this.state.role}>{React.cloneElement(children, { role: this.state.role })}</Canvas>
      </div>
    )
  }
}


export default App
