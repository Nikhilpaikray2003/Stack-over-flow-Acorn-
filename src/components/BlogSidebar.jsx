import React from 'react';

const BlogSidebar = () => (
  <aside className="hidden lg:block w-72 bg-white p-4 shadow-md">
    <div className="font-semibold text-gray-700 mb-4">The Overflow Blog</div>
    <ul className="space-y-3">
      <li className="text-gray-600">The unexpected benefits of mentoring others</li>
      <li className="text-gray-600">Podcast 354: Building for AR with Niantic Labs' augmented reality SDK</li>
    </ul>
    <div className="font-semibold text-gray-700 mt-6 mb-4">Featured & Meta</div>
    <ul className="space-y-3">
      <li className="text-gray-600">Beta release of Collectives™ on Stack Overflow</li>
    </ul>
    <div className="font-semibold text-gray-700 mt-6 mb-4">Hot Meta Posts</div>
    <ul className="space-y-3">
      <li className="text-gray-600">Tags appear to be redundant</li>
      <li className="text-gray-600">Handling duplicate questions</li>
    </ul>
  </aside>
);

export default BlogSidebar;
