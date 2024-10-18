import React, { useContext } from 'react';
import { useModal } from '../context/ModalContext';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, setModalOpen } = useModal();

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <p>This is a modal window</p>
          <button onClick={() => setModalOpen(false)}>Close Modal</button>
        </div>
      )}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
    </>
  );
};

export default Modal;
