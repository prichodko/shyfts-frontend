import React, { Component } from 'react'

import Navbar from './Navbar'

class Canvas extends Component {
  render () {
    return (
      <div className='canvas-wrapper'>
        <Navbar data={this.props.data}/>
        {this.props.children}
      </div>
    )
  }
}

// class Canvas extends Component {
//   render () {
//     return (
//       <div className='canvas-wrapper'>
//         <Navbar />
//         <Datebar />
//         <div className='planner-wrapper'>
//           <Planner />
//         </div>
//       </div>
//     )
//   }
// }

export default Canvas
