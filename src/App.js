import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { Feed, Header, SearchResult, VideoDetails,PageNotFound } from './components/index'

import { ApiContext } from './contest/contextApi';



function App() {
  const { darkMode, setDarkMode } = useContext(ApiContext);

  // Retrieve darkMode value from local storage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");

    // If a value exists in local storage, set the darkMode state accordingly
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, [setDarkMode]);

  useEffect(() => {
    // Store darkMode value in local storage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);




  return (
    <div className={`${darkMode ? 'dark' : ''}  flex flex-col h-full`}>

      <div className='flex flex-col h-full bg-slate-100 dark:bg-[#181818] text-black dark:text-white'>
        <Header />

        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
