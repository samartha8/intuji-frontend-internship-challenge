import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar() {
  return (
    <header className=' bg-custom-gradient '>
    <div className='container mx-auto px-8 py-5 flex justify-between items-center'>
      <div className='text-lg font-bold'>
        <a href='#'>AR Shakir</a>
      </div>
      <div className='flex-grow'>
        <nav>
          <ul className='flex justify-center space-x-8'>
            <li><a href='#' className='hover:text-gray-700 text-[14px] flex items-center gap-1'>Products<MdKeyboardArrowDown /></a></li>
            <li><a href='#' className='hover:text-gray-700 text-[14px] flex items-center gap-1'>Template<MdKeyboardArrowDown /></a></li>
            <li><a href='#' className='hover:text-gray-700 text-[14px]'>Blogs</a></li>
            <li><a href='#' className='hover:text-gray-700 text-[14px]'>Pricing</a></li>
          </ul>
        </nav>
      </div>
      <div className='text-[14px]'>
      <a href='#' className='text-gray-700 mr-4'>Sign In</a>
        <button className='bg-[#4F46BA]  text-white py-2 px-4 hover:bg-[#3f37a0]'>Start Free</button>
      </div>
      </div>
    </header>
  );
}
