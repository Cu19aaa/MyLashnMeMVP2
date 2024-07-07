// src/components/Modal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, imgUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-4">
        <button 
          className="absolute top-2 right-2 text-2xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <motion.img 
          src={imgUrl} 
          alt="Gallery Item" 
          className="rounded-lg max-w-full max-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Modal;
