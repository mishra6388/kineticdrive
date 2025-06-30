'use client';
import React, { useState } from "react";

const UnderMaintenance = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 text-white">
      <div className="relative text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full">
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
          onClick={() => setVisible(false)}
          aria-label="Close"
        >
          &times;
        </button>

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">We'll Be Back Soon!</h1>
        <p className="text-gray-300 text-lg mb-6">
          Our website is currently undergoing scheduled maintenance.
          <br />
          You can still explore the website by clicking the close button above.
        </p>

        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
