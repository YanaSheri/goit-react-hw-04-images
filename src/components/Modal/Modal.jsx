import { Component } from "react";
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

   componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
    
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

    render() { 
        return createPortal(
            <div className={s['overlay']} onClick={this.handleBackdropClick}>
                <div className={s['modal']}>{this.props.children} </div>
            </div>,
            modalRoot
        );
    }
}
 
export default Modal;