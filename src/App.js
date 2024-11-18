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