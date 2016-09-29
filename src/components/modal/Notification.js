import React from 'react'

import exclamationMarkIcon from '../../assets/exclamation_mark.svg'
import closeIcon from '../../assets/close.svg'

const Notification = ({ name, message, color }) => {
  return (
    <div className='notification'>
      <img src={exclamationMarkIcon} role='presentation' />
      <div className='notification__text'>
        {name + ' ' + message}
      </div>
      <button className='notification__action'>
        View More
      </button>
      <button className='notification__close'>
        <img src={closeIcon} role='presentation' />
      </button>
    </div>
  )
}

export default Notification
