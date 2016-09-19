import React, { Component } from 'react'

import Plus from '../../assets/plus-sign.svg'

class AddGroup extends Component {
  render () {
    return (
      <div className='group-add'>
        <div className='group-add__text'>
          Groups
        </div>
        <img src={Plus} alt='' />
      </div>
    )
  }
}

export default AddGroup
