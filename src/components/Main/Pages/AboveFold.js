import React from 'react';
// import one from '/public/image/one.png'
const App = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-8 py-5 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left max-w-[650px]">
          <h1 className="text-4xl font-bold mb-4">
            Managing freelance payments has never been easier
          </h1>
          <p className="text-gray-700 mb-6">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="flex items-center text-green-600 py-2 px-6 rounded-lg border border-green-600 hover:bg-green-50">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V5a1 1 0 00-2 0v2a1 1 0 001 1h2a1 1 0 000-2h-1z" clipRule="evenodd" />
              </svg>
              See How It Works
            </button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <div className="flex items-center">
              <span className="text-purple-600">✔</span>
              <span className="ml-2">Free Register</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-600">✔</span>
              <span className="ml-2">Great Service</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="path/to/your/image.png" alt="Banking Solution" className="w-full max-w-md" />
        </div>
      </div>
      <div className="bg-white py-8 w-full text-center">
        <h2 className="text-gray-700 mb-4">Over 32k+ software businesses growing with AR Shakir.</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* <img src={one}  alt="OpenZeppelin" className="h-8" /> */}
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
