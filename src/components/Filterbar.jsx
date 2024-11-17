// import React from 'react';

// const FilterBar = ({ setFilter }) => (
//   <div className="flex space-x-4 mb-6">
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-orange-500"
//       onClick={() => setFilter('interesting')}
//     >
//       Interesting
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-orange-500"
//       onClick={() => setFilter('bountied')}
//     >
//       Bountied
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-orange-500"
//       onClick={() => setFilter('hot')}
//     >
//       Hot
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-orange-500"
//       onClick={() => setFilter('week')}
//     >
//       Week
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-orange-500"
//       onClick={() => setFilter('month')}
//     >
//       Month
//     </button>
//   </div>
// );

// export default FilterBar;



// import React from 'react';

// const FilterBar = ({ setFilter }) => (
//   <div className="flex items-center justify-between mb-6">
    
//     {/* Filter Buttons */}
//     <div className="flex space-x-4">
//       <button
//         className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//         onClick={() => setFilter('interesting')}
//       >
//         Interesting
//       </button>
//       <button
//         className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//         onClick={() => setFilter('bountied')}
//       >
//         Bountied
//       </button>
//       <button
//         className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//         onClick={() => setFilter('hot')}
//       >
//         Hot
//       </button>
//       <button
//         className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//         onClick={() => setFilter('week')}
//       >
//         Week
//       </button>
//       <button
//         className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//         onClick={() => setFilter('month')}
//       >
//         Month
//       </button>
//     </div>

//     {/* Ask Question Button */}
//     <div className="ml-auto">
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-sky-600">
//         Ask Question
//       </button>
//     </div>
//   </div>
// );

// export default FilterBar;








// import React from 'react';

// const FilterBar = ({ setFilter }) => (
//   <div className="flex items-center space-x-4">
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//       onClick={() => setFilter('interesting')}
//     >
//       Interesting
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//       onClick={() => setFilter('bountied')}
//     >
//       Bountied
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//       onClick={() => setFilter('hot')}
//     >
//       Hot
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//       onClick={() => setFilter('week')}
//     >
//       Week
//     </button>
//     <button
//       className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
//       onClick={() => setFilter('month')}
//     >
//       Month
//     </button>
//   </div>
// );

// export default FilterBar;













// import React from 'react';

// const FilterBar = ({ setFilter }) => (
//   <div className="flex items-center space-x-4 my-4">
//     <button onClick={() => setFilter('activity')} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500">
//       Interesting
//     </button>
//     <button onClick={() => setFilter('votes')} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500">
//       Bountied
//     </button>
//     <button onClick={() => setFilter('hot')} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500">
//       Hot
//     </button>
//     <button onClick={() => setFilter('week')} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500">
//       Week
//     </button>
//     <button onClick={() => setFilter('month')} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500">
//       Month
//     </button>
//   </div>
// );

// export default FilterBar;








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
          onClick={() => setFilter('interesting')}
        >
          Interesting
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500"
          onClick={() => setFilter('bountied')}
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
