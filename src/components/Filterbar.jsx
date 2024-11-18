import React from 'react';
const FilterBar = ({ setFilter }) => (
  <div className="flex flex-col mb-6">
    {/* Top Questions Heading aligned with Home Button */}
    <div className="flex items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800" style={{ marginTop: '-8px', marginLeft: '10px' }}>Top Questions</h2>
    </div>

    {/* Filter Buttons */}
    <div className="flex items-center justify-between">
      <div className="flex space-x-4">
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
          onClick={() => setFilter('activity')}
        >
          Interesting
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
          onClick={() => setFilter('creation')}
        >
          Bountied
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
          onClick={() => setFilter('hot')}
        >
          Hot
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
          onClick={() => setFilter('week')}
        >
          Week
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
          onClick={() => setFilter('month')}
        >
          Month
        </button>
      </div>

      {/* Ask Question Button on the far right */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 ml-auto">
        Ask Question
      </button>
    </div>
  </div>
);

export default FilterBar;