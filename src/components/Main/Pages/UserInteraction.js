import React from 'react'

export default function UserInteraction() {
  return (
    <div className="bg-[#3734A9] text-white p-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative">
    <div className="text-center md:text-left max-w-[143px]">
      <p className="text-lg">We speak with our powerful statistics</p>
    </div>
    <div className="flex items-center md:items-start space-y-4 md:space-y-0 md:space-x-16">
      <div className="flex flex-col items-center space-x-2">
        <span className="text-4xl font-bold">1M+</span>
        <span className="flex items-center space-x-1">
        <img src="/image/user.p" alt="" />
          <span>Active Users</span>
        </span>
      </div>
      <div className="flex flex-col items-center space-x-2">
        <span className="text-4xl font-bold">30K+</span>
        <span className="flex items-center space-x-1">
          <img src="/image/star.png" alt="" />
          <span>5-Stars Reviews</span>
        </span>
      </div>
      <div className="flex flex-col items-center space-x-2">
        <span className="text-4xl font-bold">$252M</span>
        <span className="flex items-center space-x-1">
          <img src="/image/star.png" alt="" />
          <span>Transactions</span>
        </span>
      </div>
    </div>
    <div className='absolute right-0 top-5'>
        <img src="/image/44.png" alt="" className='max-h-[114px]'/>
    </div>
  </div>
  )
}
