import React from "react";
import {FaXmark } from "react-icons/fa6"; // Import icons

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-lg shadow-lg max-w-md w-full">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 m-2 hover:text-gray-800 transition"
          >
            <FaXmark className="text-white"/>
          </button>
        </div>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
