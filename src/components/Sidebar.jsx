import React from 'react';
import { HomeIcon, BriefcaseIcon, GlobeAltIcon,  BuildingOfficeIcon ,UserGroupIcon,PlusIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white p-4">
      {/* Home Section */}
      <nav className="flex flex-col space-y-4">
        <button className="flex items-center space-x-2 text-gray-800 font-semibold hover:text-orange-500">
          <HomeIcon className="h-5 w-5 text-gray-500" />
          <span>Home</span>
        </button>

        {/* Public Section */}
        <div>
        <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
            <GlobeAltIcon className="h-5 w-5 text-gray-500" />
            <span>Public</span>
        </button>
          
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              
              <span>Questions</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              
              <span>Tags</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              
              <span>Users</span>
            </button>
          </div>
        </div>

        {/* Collectives Section */}
        <div>
        <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
            <UserGroupIcon className="h-5 w-5 text-gray-500" />
           <span>Collectives</span>
         </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              
              <span>Explore Jobs</span>
            </button>
            
          </div>
        </div>

        {/* Find Jobs Section */}
        <div>
        <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
            <BriefcaseIcon className="h-5 w-5 text-gray-500" />
           <span>Find Jobs</span>
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              
              <span>Jobs</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            
              <span>Companies</span>
            </button>
          </div>
        </div>

        {/* Teams Section */}
        <div>
        <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
           <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
            <span>Teams</span>
        </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              <PlusIcon className="h-3 w-3 text-gray-500"></PlusIcon>
              <span>Create a Team</span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;












