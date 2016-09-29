import React, { Component } from 'react'

import Navbar from './Navbar'

class Canvas extends Component {
  render () {
    return (
      <div className='canvas-wrapper'>
        <Navbar role={this.props.role} />
        {this.props.children}
      </div>
    )
  }
}

export default Canvas
