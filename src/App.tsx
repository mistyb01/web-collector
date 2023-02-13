import React, { useState } from 'react';
import { FC } from 'react';
import Bookmarks from './Bookmarks';
import Categories from './Categories';
import Tags from './Tags';
import { Link } from './@types/app';
const App:FC = () => {

  
  let bookmarkData: Link[] = [
    {name: "mdn", url: "https://developer.mozilla.org/en-US/", description:"", category: "code", tag: "official docs"},
    {name: "react", url: "https://reactjs.org/docs/hello-world.html", description:"",  category: "code", tag: "official docs"},
    {name: "css demystified", url: "https://courses.kevinpowell.co/view/courses/css-demystified", description:"", category: "code", tag: "courses"},
    {name: "tumblr", url: "https://tumblr.com", description:"", category: "fun", tag: "social"},
  ]

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
      <main>
        <div className="filter-menu">
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
