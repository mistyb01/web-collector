import React from 'react';
import { FC } from 'react';
import Bookmarks from './Bookmarks';
import { Link } from './@types/app';
const App:FC = () => {

  
  let bookmarkData: Link[] = [
    {name: "mdn", url: "https://developer.mozilla.org/en-US/", description:"", category: "code", subcategory: "official docs"},
    {name: "react", url: "https://reactjs.org/docs/hello-world.html", description:"",  category: "code", subcategory: "official docs"},
    {name: "css demystified", url: "https://courses.kevinpowell.co/view/courses/css-demystified", description:"", category: "code", subcategory: "courses"},
    {name: "tumblr", url: "https://tumblr.com", description:"", category: "fun", subcategory: "social"},
  ]

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Bookmarks bookmarkData={bookmarkData}/>
    </div>
  );
}

export default App;
