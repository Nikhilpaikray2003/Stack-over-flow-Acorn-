import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionList from './components/Questionlist';
import FilterBar from './components/Filterbar';
import BlogSidebar from './components/BlogSidebar';

function App() {
  const [filter, setFilter] = useState('hot'); // Default filter for the questions

  return (
    <div className="bg-white min-h-screen font-sans"> {/* Set background to white */}
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-6 bg-white"> {/* Ensure main content background is also white */}
          <FilterBar setFilter={setFilter} />
          <QuestionList filter={filter} />
        </main>
        <BlogSidebar />
      </div>
    </div>
  );
}

export default App;