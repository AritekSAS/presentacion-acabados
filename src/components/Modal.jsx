// src/components/Modal.jsx
import React from 'react';

export default function Modal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 relative max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-lg"
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt="Acabado"
          className="rounded w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}


