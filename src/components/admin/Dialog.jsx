import React from 'react';

const Dialog = ({ open, onClose, title, children, className = '' }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl ${className}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
