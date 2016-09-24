import React, { Component } from 'react'
import ModalBase from 'react-modal'

class Modal extends Component {
  render () {
    const { isOpen, children } = this.props
    return (
      <ModalBase isOpen={isOpen} className='modal' overlayClassName='modal__overlay'>
        {children}
      </ModalBase>
    )
  }
}

export default Modal
