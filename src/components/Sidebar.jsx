import React, { useState } from 'react';
import { HomeIcon, BriefcaseIcon, GlobeAltIcon, BuildingOfficeIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [active, setActive] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getButtonClasses = (section) =>
    `flex items-center space-x-2 font-semibold p-2 rounded-r-full ${
      active === section
        ? 'bg-orange-100 border-l-4 border-orange-500 text-black-500'
        : 'text-gray-800 hover:bg-gray-100'
    }`;

  return (
    <aside className={`w-40 bg-white p-3 fixed h-full top-16  border-gray-200 z-10 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
      <button className="lg:hidden mb-4 text-gray-800 font-semibold" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        Toggle Sidebar
      </button>
      <nav className="flex flex-col space-y-3">
        
        {/* Home Section */}
        <button
          onClick={() => setActive('home')}
          className={getButtonClasses('home')}
        >
          <HomeIcon className="h-5 w-5 text-orange-500" />
          <span>Home</span>
        </button>

        {/* Public Section */}
        <div>
          <button
            onClick={() => setActive('public')}
            className={getButtonClasses('public')}
          >
            <GlobeAltIcon className="h-5 w-5 text-orange-500" />
            <span>Public</span>
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="text-gray-600 hover:text-orange-500">Questions</button>
            <button className="text-gray-600 hover:text-orange-500">Tags</button>
            <button className="text-gray-600 hover:text-orange-500">Users</button>
          </div>
        </div>

        {/* Collectives Section */}
        <div>
          <button
            onClick={() => setActive('collectives')}
            className={getButtonClasses('collectives')}
          >
            <UserGroupIcon className="h-5 w-5 text-orange-500" />
            <span>Collectives</span>
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="text-gray-600 hover:text-orange-500">Explore Jobs</button>
          </div>
        </div>

        {/* Find Jobs Section */}
        <div>
          <button
            onClick={() => setActive('jobs')}
            className={getButtonClasses('jobs')}
          >
            <BriefcaseIcon className="h-5 w-5 text-orange-500" />
            <span>Find Jobs</span>
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="text-gray-600 hover:text-orange-500">Jobs</button>
            <button className="text-gray-600 hover:text-orange-500">Companies</button>
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <button
            onClick={() => setActive('teams')}
            className={getButtonClasses('teams')}
          >
            <BuildingOfficeIcon className="h-5 w-5 text-orange-500" />
            <span>Teams</span>
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              <PlusIcon className="h-3 w-3 text-black-500" />
              <span>Create a Team</span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;