import React, { Component } from 'react';
import Modal from './modal';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';


function showHeader(headerContent){
  if(headerContent){
    return (
      <div className='header-content-wrapper trans-all'>
        {headerContent}
      </div>
    )
  }
  else{
    return (
      <button className='modal-btn' >
        Open Modal
      </button>
    )
  }

}

class ModalOpener extends React.Component {
  constructor(props) {
    let headerContent = props.headerContent || null;
    super(props)
    this.state = { 
      isModalOpen: false,
      headerContent: headerContent,
    }
  }

  render() {
    return (
      <div >
        <div onClick={() => this.openModal()}>
          {showHeader(this.state.headerContent)}
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} >
          {this.props.children}
          <div className='close-modal-action-wrapper'>
            <button className='clost-modal-action close' onClick={() => this.closeModal()}>
              <FontAwesome name='times' />
            </button>
          </div>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}
export default ModalOpener;