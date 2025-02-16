'use client'

import { useEffect, useState } from "react";

export function InfoModal({title, onClose, children, isOpen}) {
  const [showModal, setShowModal] = useState(false);

  // When modal is opened, delay the rendering of the modal content for animation
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      // Wait for the animation to finish before actually hiding the modal
      const timer = setTimeout(() => setShowModal(false), 300); // Duration matches fade-out transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null; // Don't render anything if modal should be hidden

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose} // Close the modal when clicking outside of it
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <div className="flex justify-between items-center mb-4">

          <h3 className="text-base font-semibold text-gray-900" id="modal-title">{title}</h3>

          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2">
          {children}
        </div>
        {/* <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={onClose}
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}