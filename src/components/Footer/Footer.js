import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold">AR Shakir</h2>
          <p className="text-gray-600 mt-2">Finance helps companies manage payments easily.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-messenger"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-infinity"></i>
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold">Company</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold">Resources</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Proposal Template</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Invoice Template</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Tutorial</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">How to write a contract</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold">Join Our Newsletter</h2>
          <form className="mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 mt-2">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-8">
        Copyright © AR Shakir 2022. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
