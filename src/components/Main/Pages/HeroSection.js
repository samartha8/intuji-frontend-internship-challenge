import React from 'react';

export default function HeroSection() {
  return (
    <section className='bg-custom-gradient relative overflow-hidden'>
    <div className="container  mx-auto px-8 overflow-hidden flex flex-col md:flex-row justify-between gap-3 items-center ">
      <div className="text-center md:text-left max-w-[650px] flex flex-col gap-14">
      <div className='max-w-[590px]'>
          <h1 className="text-[60px]  font-extrabold">
            Managing freelance payments has never been easier
          </h1>
          <p className="text-[#64607D] ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing.
          </p>
      </div>
      <div>
        <div className="flex justify-center md:justify-start space-x-4 mb-14">
          <button className="bg-[#3734A9] text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <div className="flex justify-between items-center gap-2 text-[#3734A9]">
            {/* <button className=" py-2 px-6 rounded-[50%] bg-green-50 "> */}
              {' '}
              <img src="/image/Play.png"/>
            {/* </button> */}
            <p>See How It Works</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <div className="flex items-center">
            <img src="/image/blueTick.png" alt="blueTick" />
            <span className="ml-2">Free Register</span>
          </div>
          <div className="flex items-center">
          <img src="/image/blueTick.png" alt="blueTick" />
            <span className="ml-2">Great Service</span>
          </div>
        </div>
        </div>
      </div>
      <div className="max-h-[760px] lg:max-h-[855px]">
        <img
          src="/image/heroSection.png"
          alt="Banking Solution"
          className="w-full "
        />
      </div>
    </div>
    <div className='absolute left-[-1px] bottom-[10%]'>
      <img src="/image/24.png" alt="" />
    </div>
    <div className='absolute right-[2px] bottom-[535px]'>
      <img src="/image/62.png" alt="" />
    </div>
    <div className='absolute right-0 -bottom-44 '>
      <img src="/image/80.png" alt="" />
    </div>
    </section>
  );
}
