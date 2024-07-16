import React from 'react';
// import one from '/public/image/one.png';

const App = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="path/to/your/image.png" alt="Banking Solution" className="w-full max-w-md" />
      </div>
      
      <div className="bg-white py-8 w-full text-center">
        <h2 className="text-gray-700 mb-4">Over 32k+ software businesses growing with AR Shakir.</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* <img src={one} alt="OpenZeppelin" className="h-8" /> */}
          <img src="path/to/oracle-logo.png" alt="Oracle" className="h-8" />
          <img src="path/to/morpheus-logo.png" alt="Morpheus" className="h-8" />
          <img src="path/to/samsung-logo.png" alt="Samsung" className="h-8" />
          <img src="path/to/monday-logo.png" alt="Monday" className="h-8" />
          <img src="path/to/segment-logo.png" alt="Segment" className="h-8" />
          <img src="path/to/protonet-logo.png" alt="Protonet" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default App;
