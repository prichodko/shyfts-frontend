import React, { Component } from 'react'

import Pane from '../../components/app/Pane'
import Canvas from '../../components/app/Canvas'

import './App.css'

class App extends Component {

  render () {
    return (
      <div className='app-container'>
        <Pane />
        <Canvas>{this.props.children}</Canvas>
      </div>
    )
  }
}

export default App
