import React from 'react';

function MyComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
      <p className="text-gray-700">
        We so opinion friends me message as delight. Whole front do of plate heard on
        ought. His defective nor convinced residence own.
      </p>
      <div className="flex items-center mt-6">
        <img
          className=" h-16 rounded-full mr-4"
          src="..."
          alt="Profile picture"
        />
        <div>
          <p className="text-lg font-medium">Mike Taylor</p>
          <p className="text-gray-500">Web Designer</p>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
