import React from 'react';

function Payments() {
  return (
    <div className="bg-gray-50 px-4 flex justify-center ">
      <div className="flex items-center justify-between">
        {/* Left Section: Image Placeholder */}
          <div className="h-full">
            <img src="/image/payments.png" alt="payments" />
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
          <img src="/image/line.png" alt="" />
          <ul className="space-y-4">
            <li className="flex items-start">
              <img src="/image/yellowTick.png" alt="" />
              <span className="ml-2 text-gray-700">Get Overview at a glance</span>
            </li>
            <li className="flex items-start">
               <img src="/image/yellowTick.png" alt="" />
              <span className="ml-2 text-gray-700">Deposit funds easily, security</span>
            </li>
            <li className="flex items-start">
               <img src="/image/yellowTick.png" alt="" />
              <span className="ml-2 text-gray-700">Get Live Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Payments;
