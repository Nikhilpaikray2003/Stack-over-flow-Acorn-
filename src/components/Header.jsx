import React, { useState } from 'react';
import logo from '../components/logo-stackoverflow.png';
import { MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, UserIcon, Cog6ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <header className="bg-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 fixed top-0 left-0 right-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="StackOverflow Logo" className="h-7 w-auto" />
        <span className="sr-only">StackOverflow</span>
      </div>

      {/* Responsive Search Bar and Products Button with Additional Spacing */}
      <div className="flex items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12 space-x-6"> {/* space-x-6 for larger gap */}
        <div className="relative flex-grow">
          <div 
            className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer" 
            onClick={handleSearch}
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-orange-500" />
          </div>
          <input
            type="text"
            placeholder="Search Your Answers Here..."
            className="border rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <button className="ml-4 bg-white-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200 flex-shrink-0">
          Products
        </button>
      </div>

      {/* Icon Section */}
      <div className="flex items-center space-x-6 ml-4"> {/* Adjusted space-x and added ml-4 */}
        <div className="relative group">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
          <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md py-1 px-2">
            Messages
          </span>
        </div>
        
        <div className="relative group">
          <TrophyIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
          <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md py-1 px-2">
            Achievements
          </span>
        </div>

        <div className="relative group">
          <Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
          <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md py-1 px-2">
            Settings
          </span>
        </div>

        <div className="relative group">
          <UserIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
          <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded-md py-1 px-2">
            Profile
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;