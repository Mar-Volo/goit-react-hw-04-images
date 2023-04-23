import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop } from './Modal.styled';
import { ModalBox } from './Modal.styled';

const ModalRoot = document.querySelector('#ModalRoot');

export const Modal = ({ handleClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', escClose);
    return () => {
      window.removeEventListener('keydown', escClose);
    };
  });

  const escClose = e => {
    if (e.code === 'Escape') {
      handleClose();
    }
  };
  const onBackDropClose = e => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return createPortal(
    <BackDrop onClick={onBackDropClose}>
      <ModalBox>{children}</ModalBox>
    </BackDrop>,
    ModalRoot
  );
};
Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
