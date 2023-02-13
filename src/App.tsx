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
    {name: "typescript", url: "https://www.typescriptlang.org/docs/", description:"", category: "code", tag: "official docs"},
    {name: "css demystified", url: "https://courses.kevinpowell.co/view/courses/css-demystified", description:"", category: "code", tag: "online course"},
    {name: "javascript dsa", url: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/", description:"", category: "code", tag: "online course"},
    {name: "teach yourself cs", url: "https://teachyourselfcs.com/", description:"", category: "code", tag: "general guides"},
    {name: "frontend roadmap", url: "https://roadmap.sh/frontend", description:"", category: "code", tag: "general guides"},
    
    {name: "yesterweb", url: "https://yesterweb.org/", description:"", category: "fun", tag: "indie web"},
    {name: "sadgrl.online", url: "https://sadgrl.online/cyberspace/surf-the-web", description:"", category: "fun", tag: "indie web"},
    {name: "rgb teahouse", url: "https://rgbteahouse.neocities.org/", description:"", category: "fun", tag: "indie web"},
    {name: "vg museum", url: "http://www.vgmuseum.com/", description:"", category: "fun", tag: "video games"},
    {name: "starmen.net", url: "http://www.starmen.net/", description:"", category: "fun", tag: "video games"},

    {name: "loveariddle", url: "https://loveariddle.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {name: "emmmeralddd", url: "https://emmmeralddd.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {name: "mivvu", url: "https://mivvu-archive.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {name: "ovopack", url: "https://ovopack.tumblr.com/", description:"", category: "art", tag: "web artists"},
    {name: "jiro sasumo", url: "https://www.pixiv.net/en/users/326389", description:"", category: "art", tag: "web artists"},
    {name: "ohprcr", url: "https://ohprcr.tumblr.com", description:"", category: "art", tag: "web artists"},
    {name: "worvies", url: "https://twitter.com/Worvies", description:"", category: "art", tag: "web artists"},
    {name: "creamyghost", url: "https://twitter.com/CreamyGhost", description:"", category: "art", tag: "web artists"},
    {name: "1041uuu", url: "https://1041uuu.tumblr.com", description:"", category: "art", tag: "web artists"},
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
