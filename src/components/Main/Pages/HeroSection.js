import React from 'react';

export default function HeroSection() {
  return (
    <div className="container bg-custom-gradient mx-auto px-8 py-5 flex flex-col md:flex-row justify-between gap-5 items-center">
      <div className="text-center md:text-left max-w-[650px]">
        <h1 className="text-[60px] mb-4 font-extrabold">
          Managing freelance payments has never been easier
        </h1>
        <p className="text-gray-700 mb-6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <div className="flex justify-between items-center gap-2">
            {/* <button className=" py-2 px-6 rounded-[50%] bg-green-50 "> */}
              {' '}
              <img src="/public/image/Play.png"
              >
              </img>
            {/* </button> */}
            <p>See How It Works</p>
          </div>
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
        <img
          src="/one.png"
          alt="Banking Solution"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
}
