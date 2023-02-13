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
      <header>
        <Categories categoryList={categoryList} category={category} handleCategoryChange={handleCategoryChange}/>
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
    </div>
  );
}

export default App;
