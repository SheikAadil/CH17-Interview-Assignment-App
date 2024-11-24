import React from 'react';
import closeIcon from '../../assets/close-icon.svg';

const Modal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-all">
      <div className="relative bg-white rounded-2xl shadow-lg w-96 p-8 max-w-lg transform scale-100 transition-transform duration-300 ease-out">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="w-6 h-6" /> 
        </button>
        <img src={imageSrc} alt="Flyer" className="w-full h-auto rounded-lg"/>
      </div>
    </div>
  );
};

export default Modal;
