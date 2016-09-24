import React, { Component } from 'react'

import Pane from '../../components/app/Pane'
import Canvas from '../../components/app/Canvas'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: { teamname: 'Tony’s Café', firstname: 'Tony', lastname: 'Pérez'},
    }
  }


  render () {
    return (
      <div className='app-container'>
        <Pane data={this.state.data} />
        <Canvas data={this.state.data}>{this.props.children}</Canvas>
      </div>
    )
  }
}

export default App
