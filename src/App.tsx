import React, { useState } from 'react';
import { FC } from 'react';
import Bookmarks from './Bookmarks';
import Categories from './Categories';
import Tags from './Tags';
import AddBookmark from './AddBookmark';
import bookmarkData from './data/static-data';

const App:FC = () => {
  
  const [category, setCategory] = useState('code');
  const [tag, setTag] = useState('all');
  const [showAddBookmark, setShowAddBookmark] = useState(false);
  
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
  
  return (
    <div className="app">
    
      {showAddBookmark && 
        <>
         <header>
          <h1 className="header-logo">web collector</h1>
          <div className="header-buttons horizontal-space">
            <button className="header__button" onClick={() => setShowAddBookmark(!showAddBookmark)}>Close</button>
          </div>
        </header>
          <main>
            <h2>new bookmark</h2>
            <AddBookmark/>
          </main>
        </>
      }
      {!showAddBookmark &&
        <>
        <header>
          <h1 className="header-logo">web collector</h1>
          <Categories categoryList={categoryList} category={category} handleCategoryChange={handleCategoryChange}/>
          <div className="header-buttons horizontal-space">
            <button className="header__button" onClick={() => setShowAddBookmark(!showAddBookmark)}>add bookmark</button>
            <button className="header__button">edit</button>
          </div>
        </header>
        <main className="horizontal-space">
          <div className="filter-menu">
            <h3 className="filter-menu__header">filters</h3>
            <Tags bookmarkData={bookmarkData} category={category} tag={tag} handleTagChange={handleTagChange} />
          </div>
          <div className="bookmarks">
          <Bookmarks bookmarkData={bookmarkData} category={category} tag={tag}/>
          </div>
        </main>
      </>
      }
    </div>
  );
}

export default App;
