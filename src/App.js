




// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import QuestionList from './components/Questionlist';
// import FilterBar from './components/Filterbar';
// import BlogSidebar from './components/BlogSidebar';

// function App() {
//   const [filter, setFilter] = useState('hot');

  


//   return (
//     <div className="bg-white min-h-screen font-sans">
//       <Header />
      
//       <div className="flex">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content Area */}
//         <main className="flex-1 p-6 mt-20 ml-40">
//           <FilterBar setFilter={setFilter} />
//           <QuestionList filter={filter} />
//         </main>

//         {/* Right Sidebar (Optional) */}
//         <BlogSidebar />
//       </div>
//     </div>
//   );
// }

// export default App;





//After Responsiveness









// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import QuestionList from './components/Questionlist';
// import FilterBar from './components/Filterbar';
// import BlogSidebar from './components/BlogSidebar';

// function App() {
//   const [filter, setFilter] = useState('hot');

//   return (
//     <div className="bg-white min-h-screen font-sans">
//       <Header />
      
//       <div className="flex flex-col lg:flex-row mt-20">
//         {/* Sidebar */}
//         <Sidebar className="hidden lg:block" /> {/* Sidebar hidden on small screens */}

//         {/* Main Content Area */}
//         <main className="flex-1 p-6 lg:ml-40">
//           <FilterBar setFilter={setFilter} />
//           <QuestionList filter={filter} />
//         </main>

//         {/* Right Sidebar (Blog Sidebar) */}
//         <BlogSidebar className="hidden lg:block ml-auto mt-6 lg:mt-0 lg:w-72" />
//       </div>
//     </div>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import QuestionList from './components/Questionlist';
// import FilterBar from './components/Filterbar';
// import BlogSidebar from './components/BlogSidebar';

// function App() {
//   const [filter, setFilter] = useState('hot');

//   return (
//     <div className="bg-white min-h-screen font-sans">
//       <Header />

//       <div className="flex">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content Area */}
//         <main className="flex-1 p-6 mt-16 ml-40">
//           {/* Top Questions Title */}
//           <div className="flex items-center mb-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Top Questions</h2>
//           </div>

//           {/* Filter Bar with Ask Question Button */}
//           <div className="flex items-center justify-between mt-4 mb-6">
//             <FilterBar setFilter={setFilter} />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-sky-600">
//               Ask Question
//             </button>
//           </div>

//           {/* Question List */}
//           <QuestionList filter={filter} />
//         </main>

//         {/* Right Sidebar (Optional) */}
//         <BlogSidebar />
//       </div>
//     </div>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import QuestionList from './components/Questionlist';
// import FilterBar from './components/Filterbar';
// import BlogSidebar from './components/BlogSidebar';

// function App() {
//   const [filter, setFilter] = useState('activity'); 

//   return (
//     <div className="bg-white min-h-screen font-sans">
//       <Header />

//       <div className="flex">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content Area */}
//         <main className="flex-1 p-6 mt-16 ml-40">
//           {/* Top Questions Title */}
//           <div className="flex items-center mb-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Top Questions</h2>
//           </div>

//           {/* Filter Bar with Ask Question Button */}
//           <div className="flex items-center justify-between mb-6">
//             <FilterBar setFilter={setFilter} />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-sky-600">
//               Ask Question
//             </button>
//           </div>

//           {/* Question List */}
//           <QuestionList filter={filter} />
//         </main>

//         {/* Right Sidebar */}
//         <BlogSidebar />
//       </div>
//     </div>
//   );
// }

// export default App;











import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionList from './components/Questionlist';
import FilterBar from './components/Filterbar';
import BlogSidebar from './components/BlogSidebar';

function App() {
  const [filter, setFilter] = useState('activity');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header onSearch={handleSearch} />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 mt-20 ml-40">
          <FilterBar setFilter={setFilter} />
          <QuestionList filter={filter} searchQuery={searchQuery} />
        </main>

        {/* Right Sidebar */}
        <BlogSidebar />
      </div>
    </div>
  );
}

export default App;
