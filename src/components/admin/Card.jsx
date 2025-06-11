import React from 'react';

const Tile = ({ children, title, action, actionText, onAction }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-1">{title}</h2>
        </div>
        {children}
        {action && (
          <button
            onClick={onAction}
            className="w-full bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Tile;
