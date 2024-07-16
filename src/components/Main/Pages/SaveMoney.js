import React from 'react';
// import rightImage from './path/to/right-image.png'; // Path to the image on the right
// import lowerImage from './path/to/lower-image.png'; // Path to the image on the lower left

export default function SaveMoney() {
  return (
    <div className="bg-gray-50 py-16 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div>
          <h2 className="text-indigo-600 text-sm font-semibold">WHY CHOOSE US</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Save money with proper transaction
          </h1>
          <p className="text-gray-600 mb-6">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
          </p>
          <div className="bg-gray-200 p-4 rounded-lg">
            <blockquote className="text-gray-800 italic">
              "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows."
            </blockquote>
            <cite className="text-gray-600 mt-2 block">- Mike Taylor, Web Designer</cite>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex justify-center relative">
          <img src="" alt="Hand holding a credit card" className="w-full max-w-md rounded-lg shadow-lg" />
          <div className="absolute bottom-0 left-0 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-gray-800 font-bold">Total Balance</h2>
            <p className="text-green-500">$4,200 <span className="text-sm text-gray-500">+14%</span></p>
            <div className="flex space-x-2 mt-2">
              {/* Example bars */}
              <div className="h-6 bg-blue-500 w-2"></div>
              <div className="h-8 bg-blue-500 w-2"></div>
              <div className="h-10 bg-blue-500 w-2"></div>
              <div className="h-12 bg-blue-500 w-2"></div>
              <div className="h-8 bg-blue-500 w-2"></div>
              <div className="h-6 bg-blue-500 w-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
