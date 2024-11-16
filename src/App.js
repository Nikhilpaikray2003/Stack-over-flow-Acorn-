




import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionList from './components/Questionlist';
import FilterBar from './components/Filterbar';
import BlogSidebar from './components/BlogSidebar';

function App() {
  const [filter, setFilter] = useState('hot');

  


  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 mt-20 ml-40">
          <FilterBar setFilter={setFilter} />
          <QuestionList filter={filter} />
        </main>

        {/* Right Sidebar (Optional) */}
        <BlogSidebar />
      </div>
    </div>
  );
}

export default App;





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

