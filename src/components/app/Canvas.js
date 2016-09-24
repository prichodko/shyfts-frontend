import React, { Component } from 'react'

import Navbar from './Navbar'
import Datebar from './Datebar'
import Planner from './Planner'


class Canvas extends Component {
  render () {
    return (
      <div className='canvas-wrapper'>
        <Navbar data={this.props.data}/>
        <Datebar />
        <Planner />
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
