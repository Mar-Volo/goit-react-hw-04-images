import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop } from './Modal.styled';
import { ModalBox } from './Modal.styled';

const ModalRoot = document.querySelector('#ModalRoot');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.escClose);
  }
  escClose = e => {
    if (e.code === 'Escape') {
      this.props.handleClose();
    }
  };
  onBackDropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.handleClose();
    }
  };

  render() {
    return createPortal(
      <BackDrop onClick={this.onBackDropClose}>
        <ModalBox>{this.props.children}</ModalBox>
      </BackDrop>,
      ModalRoot
    );
  }
}
Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
