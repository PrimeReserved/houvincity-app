import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Website Under Construction
        </h1>
        <p className="text-lg text-gray-600">
          We are currently working on something amazing!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
