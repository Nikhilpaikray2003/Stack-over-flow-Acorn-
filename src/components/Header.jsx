import React from 'react';
import logo from '../components/logo-stackoverflow.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="StackOverflow Logo" className="h-8 w-auto" />
        <span className="sr-only">StackOverflow</span>
      </div>
      <div className="relative w-full sm:w-1/2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-orange-500" />
        </div>
        <input
          type="text"
          placeholder="Search Your Answers Here..."
          className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">Top Questions</button>
      </div>
    </header>
  );
};

export default Header;
