import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { BookmarkType } from './@types/app';
import Categories from './Categories';
import AddBookmark from './AddBookmark';
import mockData from './data/static-data';
import { useLocalStorage } from 'usehooks-ts';
import EditMode from './edit-mode/EditMode';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';

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

  function handleAddToBookmarks(newData:BookmarkType) {
    setBookmarkData([...bookmarkData, newData]);
  }

  
  function updateBookmarkData(newData:BookmarkType[]) {
    setBookmarkData(newData);
  }

  type TParams = {handleAddToBookmarks: Function, categoryList: string[], bookmarkData: BookmarkType[]}

  return (
    <Router>
  
    <div className="app">
       <header>
          <h1 className="header-logo">web collector</h1>
          <Categories categoryList={categoryList} category={category} handleCategoryChange={handleCategoryChange}/>
          <div className="header-buttons horizontal-space">
              <Link to='/add'><button className="header__button">add bookmark</button></Link>
              <Link to='/edit'><button className="header__button">edit</button></Link>
          </div>
        </header>
          <main className="main-container horizontal-space">
            <Routes>
              <Route path='/'
                element={
                  <Home
                  bookmarkData={bookmarkData} 
                  category={category} 
                  tag={tag} 
                  handleTagChange={handleTagChange}/>
                }/>
              <Route path='/add' 
                element={
                  <AddBookmark 
                    handleAddToBookmarks={handleAddToBookmarks} 
                    categoryList={categoryList} 
                    bookmarkData={bookmarkData}/>
              }/>
              <Route path='/edit'
                element={
                  <EditMode 
                    bookmarkData={bookmarkData} 
                    updateBookmarkData={updateBookmarkData} 
                    categoryList={categoryList} />
              }/>
            </Routes>
          </main>
    </div>
    </Router>

  );
}

export default App;
