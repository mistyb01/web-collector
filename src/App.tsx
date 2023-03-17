import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { BookmarkType } from './@types/app';
import AddBookmark from './AddBookmark';
import mockData from './data/static-data';
import { useLocalStorage } from 'usehooks-ts';
import EditMode from './edit-mode/EditMode';
import { HashRouter, Route, Routes,  } from 'react-router-dom';
import Home from './Home';

const App:FC = () => {
  const [bookmarkData, setBookmarkData] = useLocalStorage('bookmarkData', mockData);

  function handleAddToBookmarks(newData:BookmarkType) {
    // overwrite the mock data if we're saving data for the first time
    if (localStorage.getItem('bookmarkData') == null) {
      setBookmarkData([newData]);
    } else {
      setBookmarkData([...bookmarkData, newData]);
    }
  }
 
  function updateBookmarkData(newData:BookmarkType[]) {
    setBookmarkData(newData);
  }

  // for saving theme preferences
  // attrib: https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="app" data-theme={theme}>
    <HashRouter>
        <Routes>
          {/* for gh-pages to work, change '/' to '/<repo-name>' */}
          <Route path=''
            element={
              <Home bookmarkData={bookmarkData} 
              isDemo={false}/>}
          />
          <Route path='/add' 
            element={
              <AddBookmark 
                handleAddToBookmarks={handleAddToBookmarks} 
                bookmarkData={bookmarkData}/>}
          />
          <Route path='/edit'
            element={
              <EditMode 
                bookmarkData={bookmarkData} 
                updateBookmarkData={updateBookmarkData}
                updateTheme={(newTheme: string) => setTheme(newTheme)}
                currentTheme={theme}/>}
          />
            <Route path='/demo'
            element={
              <Home 
                bookmarkData={mockData}
                isDemo={true}/>}
              />
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
