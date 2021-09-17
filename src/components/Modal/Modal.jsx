import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ src, onClose, tag }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalContainer>
        <img src={src} alt={tag} />
      </ModalContainer>
    </Overlay>,
    modalRoot,
  );
}
