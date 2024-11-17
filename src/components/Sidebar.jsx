








// import React from 'react';
// import { HomeIcon, BriefcaseIcon, GlobeAltIcon, BuildingOfficeIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

// const Sidebar = () => {
//   return (
//     <aside className="w-40 bg-white p-3 fixed h-full top-16 hidden lg:block"> {/* Sidebar hidden on small screens */}
//       <nav className="flex flex-col space-y-3">
        
//         {/* Home Section */}
//         <button className="flex items-center space-x-2 text-gray-800 font-semibold">
//           <HomeIcon className="h-5 w-5 text-orange-500" />
//           <span>Home</span>
//         </button>

//         {/* Public Section */}
//         <div>
//           <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
//             <GlobeAltIcon className="h-5 w-5 text-orange-500" />
//             <span>Public</span>
//           </button>
//           <div className="ml-4 mt-2 flex flex-col space-y-2">
//             <button className="text-gray-600 hover:text-orange-500">Questions</button>
//             <button className="text-gray-600 hover:text-orange-500">Tags</button>
//             <button className="text-gray-600 hover:text-orange-500">Users</button>
//           </div>
//         </div>

//         {/* Collectives Section */}
//         <div>
//           <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
//             <UserGroupIcon className="h-5 w-5 text-orange-500" />
//             <span>Collectives</span>
//           </button>
//           <div className="ml-4 mt-2 flex flex-col space-y-2">
//             <button className="text-gray-600 hover:text-orange-500">Explore Jobs</button>
//           </div>
//         </div>

//         {/* Find Jobs Section */}
//         <div>
//           <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
//             <BriefcaseIcon className="h-5 w-5 text-orange-500" />
//             <span>Find Jobs</span>
//           </button>
//           <div className="ml-4 mt-2 flex flex-col space-y-2">
//             <button className="text-gray-600 hover:text-orange-500">Jobs</button>
//             <button className="text-gray-600 hover:text-orange-500">Companies</button>
//           </div>
//         </div>

//         {/* Teams Section */}
//         <div>
//           <button className="flex items-center space-x-2 text-gray-800 font-semibold mt-3">
//             <BuildingOfficeIcon className="h-5 w-5 text-orange-500" />
//             <span>Teams</span>
//           </button>
//           <div className="ml-4 mt-2 flex flex-col space-y-2">
//             <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
//               <PlusIcon className="h-3 w-3 text-orange-500" />
//               <span>Create a Team</span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;





//After Responsiveness




// import React from 'react';
// import { HomeIcon, BriefcaseIcon, GlobeAltIcon, BuildingOfficeIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

// const Sidebar = () => {
//   return (
//     <aside className="w-48 bg-white p-4 fixed h-full top-16 hidden lg:block border-r border-gray-200"> {/* Sidebar hidden on small screens */}
//       <nav className="flex flex-col space-y-4">
        
//         {/* Home Section */}
//         <button className="flex items-center space-x-3 text-gray-800 font-semibold hover:text-orange-500">
//           <HomeIcon className="h-5 w-5 text-gray-500" />
//           <span>Home</span>
//         </button>

//         {/* Public Section */}
//         <div>
//           <button className="flex items-center space-x-3 text-gray-800 font-semibold hover:text-orange-500 mt-4">
//             <GlobeAltIcon className="h-5 w-5 text-gray-500" />
//             <span>Public</span>
//           </button>
//           <div className="ml-8 mt-2 flex flex-col space-y-2">
//             <button className="text-gray-600 hover:text-orange-500">Questions</button>
//             <button className="text-gray-600 hover:text-orange-500">Tags</button>
//             <button className="text-gray-600 hover:text-orange-500">Users</button>
//           </div>
//         </div>

//         {/* Collectives Section */}
//         <div>
//           <button className="flex items-center space-x-3 text-gray-800 font-semibold hover:text-orange-500 mt-4">
//             <UserGroupIcon className="h-5 w-5 text-gray-500" />
//             <span>Collectives</span>
//           </button>
//           <div className="ml-8 mt-2 flex flex-col space-y-2">
//             <button className="text-gray-600 hover:text-orange-500">Explore Jobs</button>
//           </div>
//         </div>

//         {/* Find Jobs Section */}
//         <div>
//           <button className="flex items-center space-x-3 text-gray-800 font-semibold hover:text-orange-500 mt-4">
//             <BriefcaseIcon className="h-5 w-5 text-gray-500" />
//             <span>Find Jobs</span>
//           </button>
//           <div className="ml-8 mt-2 flex flex-col space-y-2">
//             <button className="text-gray-600 hover:text-orange-500">Jobs</button>
//             <button className="text-gray-600 hover:text-orange-500">Companies</button>
//           </div>
//         </div>

//         {/* Teams Section */}
//         <div>
//           <button className="flex items-center space-x-3 text-gray-800 font-semibold hover:text-orange-500 mt-4">
//             <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
//             <span>Teams</span>
//           </button>
//           <div className="ml-8 mt-2 flex flex-col space-y-2">
//             <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
//               <PlusIcon className="h-4 w-4 text-gray-500" />
//               <span>Create a Team</span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;












import React, { useState } from 'react';
import { HomeIcon, BriefcaseIcon, GlobeAltIcon, BuildingOfficeIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [active, setActive] = useState('home'); // Track the active section

  return (
    <aside className="w-40 bg-white p-3 fixed h-full top-16  border-gray-200 z-10">
      <nav className="flex flex-col space-y-3">
        
        {/* Home Section */}
        <button
          onClick={() => setActive('home')}
          className={`flex items-center space-x-2 text-gray-800 font-semibold p-2 rounded-r-full ${
            active === 'home' ? 'bg-orange-100 border-l-4 border-orange-500 text-orange-500' : 'hover:bg-gray-100'
          }`}
        >
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </button>

        {/* Public Section */}
        <div>
          <button
            onClick={() => setActive('public')}
            className={`flex items-center space-x-2 text-gray-800 font-semibold p-2 rounded-r-full ${
              active === 'public' ? 'bg-orange-100 border-l-4 border-orange-500 text-orange-500' : 'hover:bg-gray-100'
            } mt-3`}
          >
            <GlobeAltIcon className="h-5 w-5" />
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
            className={`flex items-center space-x-2 text-gray-800 font-semibold p-2 rounded-r-full ${
              active === 'collectives' ? 'bg-orange-100 border-l-4 border-orange-500 text-orange-500' : 'hover:bg-gray-100'
            } mt-3`}
          >
            <UserGroupIcon className="h-5 w-5" />
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
            className={`flex items-center space-x-2 text-gray-800 font-semibold p-2 rounded-r-full ${
              active === 'jobs' ? 'bg-orange-100 border-l-4 border-orange-500 text-orange-500' : 'hover:bg-gray-100'
            } mt-3`}
          >
            <BriefcaseIcon className="h-5 w-5" />
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
            className={`flex items-center space-x-2 text-gray-800 font-semibold p-2 rounded-r-full ${
              active === 'teams' ? 'bg-orange-100 border-l-4 border-orange-500 text-orange-500' : 'hover:bg-gray-100'
            } mt-3`}
          >
            <BuildingOfficeIcon className="h-5 w-5" />
            <span>Teams</span>
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
              <PlusIcon className="h-3 w-3 text-orange-500" />
              <span>Create a Team</span>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
