import React, { useState } from 'react';
import { FC } from 'react';
import Bookmarks from './Bookmarks';
import Categories from './Categories';
import Tags from './Tags';
import { Link } from './@types/app';
import bookmarkData from './data/static-data';

const App:FC = () => {

  
  
  const [category, setCategory] = useState('code');
  const [tag, setTag] = useState('all');
  
  function handleCategoryChange(e: React.MouseEvent<HTMLButtonElement>) {
    setCategory(e.currentTarget.id);
    setTag('all');
  }
  
  function handleTagChange(e: React.MouseEvent<HTMLButtonElement>) {
    setTag(e.currentTarget.id);
  }
  

  const props = {
    bookmarkData: bookmarkData,
    category: category,
    handleCategoryChange: handleCategoryChange,
    tag: tag,
    handleTagChange: handleTagChange
  }

  return (
    <div className="app">
      <header>
        <Categories {...props}/>
      </header>
      <main className="horizontal-space">
        <div className="filter-menu">
          <h3 className="filter-menu__header">filters</h3>
          <Tags {...props}/>
        </div>
        <div className="bookmarks">
         <Bookmarks {...props}/>
        </div>
      </main>
    </div>
  );
}

export default App;
