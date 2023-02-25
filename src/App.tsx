import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { BookmarkType } from './@types/app';
import Bookmarks from './Bookmarks';
import Categories from './Categories';
import Tags from './Tags';
import AddBookmark from './AddBookmark';
import mockData from './data/static-data';
import { useLocalStorage } from 'usehooks-ts';
import EditMode from './edit-mode/EditMode';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const App:FC = () => {
  
  const [bookmarkData, setBookmarkData] = useLocalStorage('bookmarkData', mockData);
  const [category, setCategory] = useState('code');
  const [tag, setTag] = useState('all');
  const [showAddBookmark, setShowAddBookmark] = useState(false);

  const [editMode, setEditMode] = useState(false);
  
  const categoryList = Array.from(new Set(
    bookmarkData.map((bookmark) => bookmark.category)
    ));
  
  function handleCategoryChange(e: React.MouseEvent<HTMLButtonElement>) {
    setCategory(e.currentTarget.id);
    setTag('all');
  }
  
  function handleTagChange(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.id === tag) {
      setTag('all');
    } else {
    setTag(e.currentTarget.id);
    }
  }

  // note: what if there was a general function in App.js
  // that simply updates bookmarkData with the new array it was given?
  // so the add, edit and delete functions can be moved and not passed as a prop?

  function handleAddToBookmarks(newData:BookmarkType) {
    setBookmarkData([...bookmarkData, newData]);
  }

  
  function updateBookmarkData(newData:BookmarkType[]) {
    setBookmarkData(newData);
  }

  type TParams = {handleAddToBookmarks: Function, categoryList: string[], bookmarkData: BookmarkType[]}

  return (
    <Router>
         <Routes>
          <Route path='/add' 
            element={
              <AddBookmark 
                handleAddToBookmarks={handleAddToBookmarks} 
                categoryList={categoryList} 
                bookmarkData={bookmarkData}/>}/>
          </Routes>
    <div className="app">
    
       <header>
          <h1 className="header-logo">web collector</h1>
          <Categories categoryList={categoryList} category={category} handleCategoryChange={handleCategoryChange}/>
          <div className="header-buttons horizontal-space">
              <Link to='/add'><button className="header__button">add bookmark</button></Link>
              <button className="header__button" onClick={() => setEditMode(true)}>edit</button>
          </div>
        </header>
       
      {/* {showAddBookmark ?
          <main className="form-container">
            <AddBookmark handleAddToBookmarks={handleAddToBookmarks} closeForm={() => setShowAddBookmark(false)} categoryList={categoryList} bookmarkData={bookmarkData}/>
          </main>
          : editMode ? 
          <main className="edit-container">
            <EditMode bookmarkData={bookmarkData} updateBookmarkData={updateBookmarkData} categoryList={categoryList} />
          </main>
          :  */}
          <main className="main-container horizontal-space">
          <div className="filter-menu">
            <h3 className="filter-menu__header">filters</h3>
            <Tags bookmarkData={bookmarkData} category={category} tag={tag} handleTagChange={handleTagChange} />
          </div>
          <div className="bookmarks">
          <Bookmarks bookmarkData={bookmarkData} category={category} tag={tag}/>
          </div>
        </main>
    </div>
    </Router>

  );
}

export default App;
