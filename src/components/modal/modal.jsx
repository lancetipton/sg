import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Modal extends React.Component {


  componentDidUpdate(){
    if(this.props.isOpen){
      let modal = ReactDOM.findDOMNode(this.refs._modal);

      modal.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }

  render() {
    if (this.props.isOpen === false){
      return null
    }
    else{

        return (
          <div>
            <div className='td-modal' ref="_modal">
              <div className='modal-content-wrapper'>
                {this.props.children}
              </div>
            </div>
            <div className='td-modal-backdrop' onClick={e => this.close(e)}/>
          </div>
        )
    }

  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

export default Modal;