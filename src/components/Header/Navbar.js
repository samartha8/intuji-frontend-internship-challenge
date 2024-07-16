import React from 'react';

export default function Navbar() {
  return (
    <header className='container mx-auto px-8 py-5 flex justify-between items-center'>
      <div className='text-lg font-bold'>
        <a href='#'>AR Shakir</a>
      </div>
      <div className='flex-grow'>
        <nav>
          <ul className='flex justify-center space-x-8'>
            <li><a href='#' className='hover:text-gray-700'>Products</a></li>
            <li><a href='#' className='hover:text-gray-700'>Template</a></li>
            <li><a href='#' className='hover:text-gray-700'>Blogs</a></li>
            <li><a href='#' className='hover:text-gray-700'>Pricing</a></li>
          </ul>
        </nav>
      </div>
      <div>
      <a href='#' className='text-gray-700 mr-4'>Sign In</a>
        <button className='bg-[#4F46BA] text-white py-2 px-4 rounded-lg hover:bg-[#3f37a0]'>Start Free</button>
      </div>
    </header>
  );
}
