import React from 'react';
// import one from '/public/image/one.png'
const App = () => {
  return (
      <div className="bg-[#F5F6F8] py-12 w-full text-center font-normal">
        <h3 className="text-[22px] mb-4">
          Over 32k+ software businesses growing with AR Shakir.
        </h3>
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
  );
};

export default App;
