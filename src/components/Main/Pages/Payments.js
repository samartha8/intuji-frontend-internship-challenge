import React from 'react';

function Payments() {
  return (
    <div className="bg-gray-50 py-16 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image Placeholder */}
        <div className="flex justify-center">
          <div className="bg-blue-200 rounded-lg w-full h-64 md:h-auto flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
        
        {/* Right Section: Text and Features */}
        <div>
          <h2 className="text-indigo-600 text-sm font-semibold">WHY CHOOSE US</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Track your payments on the go with the best way possible
          </h1>
          <p className="text-gray-600 mb-6">
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="ml-2 text-gray-700">Get Overview at a glance</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="ml-2 text-gray-700">Deposit funds easily, security</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="ml-2 text-gray-700">Get Live Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Payments;
