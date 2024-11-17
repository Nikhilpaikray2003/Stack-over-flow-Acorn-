



// import React from 'react';
// import logo from '../components/logo-stackoverflow.png';
// import { MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, UserIcon, Cog6ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';

// const Header = () => {
//   return (
//     <header className="bg-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 fixed top-0 left-0 right-0 z-10">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <img src={logo} alt="StackOverflow Logo" className="h-7 w-auto" />
//         <span className="sr-only">StackOverflow</span>
//       </div>

//       {/* Search Bar and Products Button */}
//       <div className="relative w-full sm:w-1/2 flex items-center">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <MagnifyingGlassIcon className="h-5 w-5 text-orange-500" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search Your Answers Here..."
//           className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
//         />
//         <button className="ml-4 bg-white-400 text-black px-4 py-2 rounded-lg hover:bg-gray-400">
//           Products
//         </button>
//       </div>

//       {/* Icon Section */}
//       <div className="flex items-center space-x-4">
//         <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
//         <TrophyIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
//         <Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" /> 
//         <UserIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
        
//       </div>
//     </header>
//   );
// };

// export default Header;










//After Responsiveness












// import React from 'react';
// import logo from '../components/logo-stackoverflow.png';
// import { MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, UserIcon, Cog6ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';

// const Header = () => {
//   return (
//     <header className="bg-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 fixed top-0 left-0 right-0 z-10 shadow-md">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <img src={logo} alt="StackOverflow Logo" className="h-8 w-auto" />
//         <span className="sr-only">StackOverflow</span>
//       </div>

//       {/* Search Bar and Products Button */}
//       <div className="relative w-full sm:w-1/2 flex items-center">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <MagnifyingGlassIcon className="h-5 w-5 text-orange-500" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search Your Answers Here..."
//           className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
//         />
//         <button className="ml-4 bg-white-600 text-black px-4 py-2 rounded-lg hover:bg-gray-400">
//           Products
//         </button>
//       </div>

//       {/* Icon Section */}
//       <div className="flex items-center space-x-4">
//         <TrophyIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
//         <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
//         <UserIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
//         <Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-orange-500 cursor-pointer" />
//       </div>
//     </header>
//   );
// };

// export default Header;
















import React from 'react';
import logo from '../components/logo-stackoverflow.png';
import { MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, UserIcon, Cog6ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 fixed top-0 left-0 right-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="StackOverflow Logo" className="h-7 w-auto" />
        <span className="sr-only">StackOverflow</span>
      </div>

      {/* Search Bar and Products Button */}
      <div className="relative w-full sm:w-1/2 flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-orange-500" />
        </div>
        <input
          type="text"
          placeholder="Search Your Answers Here..."
          className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="ml-4 bg-white-400 text-black px-4 py-2 rounded-lg hover:bg-gray-400">
          Products
        </button>
      </div>

      {/* Icon Section with Tooltips */}
      <div className="flex items-center space-x-4">
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
