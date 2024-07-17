import React from 'react';
// import one from '/public/image/one.png'
const App = () => {
  return (
      <div className="bg-[#F5F6F8] py-12 w-full text-center font-normal">
        <h3 className="text-[22px] mb-4">
          Over 32k+ software businesses growing with AR Shakir.
        </h3>
        <div className="flex flex-wrap justify-center items-center mt-9 gap-10">
          <img src="/image/one.png"  alt="OpenZeppelin" className="max-h-8 max-w-[140px]  object-contain object-center " />
          <img src="/image/oracle.png" alt="Oracle" className="max-h-8 max-w-[140px]  object-contain object-center"/>
          <img src="/image/morpheus.png" alt="Morpheus" className="max-h-8 max-w-[140px]  object-contain object-center" />
          <img src="/image/samsung.png" alt="Samsung" className="max-h-8 max-w-[140px]  object-contain object-center" />
          <img src="/image/monday.png" alt="Monday" className="max-h-8 max-w-[140px]  object-contain object-center" />
          <img src="/image/segment.png" alt="Segment" className="max-h-8 max-w-[140px]  object-contain object-center" />
          <img src="/image/protonet.png" alt="Protonet" className="max-h-8 max-w-[140px]  object-contain object-center" />
        </div>
      </div>
  );
};

export default App;
