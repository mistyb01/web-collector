import React from 'react';
import { FC } from 'react';
import Bookmarks from './Bookmarks';
import Date from './Date';

const App:FC = () => {
  interface Link {
    name: string, 
    url: string, 
    category: string
  }

  let bookmarkData: Link[] = [
    {name: "mdn", url: "https://developer.mozilla.org/en-US/", category: "reference"},
    {name: "react", url: "https://reactjs.org/docs/hello-world.html", category: "reference"},
    {name: "css demystified", url: "https://courses.kevinpowell.co/view/courses/css-demystified", category: "courses"},
    {name: "tumblr", url: "https://tumblr.com", category: "fun"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Date/>
      </header>
      <Bookmarks bookmarkData={bookmarkData}/>
    </div>
  );
}

export default App;
