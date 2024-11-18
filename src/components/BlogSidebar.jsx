import React from 'react';
import { PencilIcon, StarIcon, ListBulletIcon } from '@heroicons/react/24/outline';

const BlogSidebar = () => {
  return (
    <aside className="w-72 bg-white p-4 ml-auto mt-16">
      
      {/* Combined Overflow Blog and Featured & Meta Section */}
      <div className="bg-gray-50 p-4 rounded-t-lg shadow-sm"> {/* Rounded top only */}
        <h2 className="text-gray-800 font-semibold mb-4">The Overflow Blog</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <PencilIcon className="h-5 w-5 text-gray-500" />
            <span>The unexpected benefits of mentoring others</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <PencilIcon className="h-5 w-5 text-gray-500" />
            <span>Podcast 354: Building for AR with Niantic Labs' SDK</span>
          </li>
        </ul>

        <h2 className="text-gray-800 font-semibold mt-4 mb-4">Featured and Meta</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span>Beta release of Collectives™ on Stack Overflow</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span>Improving inclusivity with the new post reactions</span>
          </li>
        </ul>
      </div>

      {/* Hot Meta Posts Section */}
      <div className="bg-gray-100 p-4 shadow-sm">
        <h2 className="text-gray-800 font-semibold mb-4">Hot Meta Posts</h2>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <ListBulletIcon className="h-5 w-5 text-red-500" />
            <span>How can we handle duplicate questions more effectively?</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <ListBulletIcon className="h-5 w-5 text-red-500" />
            <span>Tags that appear redundant in some contexts</span>
          </li>
        </ul>
      </div>

      {/* Custom Filter Section */}
      <div className="bg-white p-4 rounded-b-lg shadow-sm"> {/* Rounded bottom only */}
        <h2 className="text-gray-800 font-semibold mb-4">Custom Filter</h2>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Add filter"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white rounded-lg py-2 px-3 hover:bg-blue-600">
            Add Custom Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;

