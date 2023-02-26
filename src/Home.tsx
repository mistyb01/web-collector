import React, { useState, ReactEventHandler }  from 'react';
import Bookmarks from './Bookmarks';
import Tags from './Tags';
import Categories from './Categories';
import { BookmarkType } from './@types/app';
import { Link } from 'react-router-dom';

interface Props {
  bookmarkData: BookmarkType[]
}

export const Home: React.FC<Props> = (props) => {
    const [category, setCategory] = useState('code');
    const [tag, setTag] = useState('all');
    const categoryList = Array.from(new Set(props.bookmarkData.map(bookmark => bookmark.category)));
     
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
   <>
    <header>
          <h1 className="header-logo">web collector</h1>
          <div className="horizontal-space">
              <Link to='/add'><button className="header__button">add bookmark</button></Link>
            {localStorage.getItem('bookmarkData') !== null &&
              <Link to='/edit'><button className="header__button">edit</button></Link>}
          </div>
    </header>
    <main className="home-container horizontal-space">
    {localStorage.getItem('bookmarkData') !== null ?
    <>
    <div className="filter-menu">
        <h3 className="filter-menu__header">categories</h3>
            <Categories 
            categoryList={categoryList} 
            category={category} 
            handleCategoryChange={handleCategoryChange}/>

        <h3 className="filter-menu__header">filters</h3>
        <Tags 
            bookmarkData={props.bookmarkData} 
            category={category} 
            tag={tag} 
            handleTagChange={handleTagChange} />
    </div>
    <Bookmarks bookmarkData={props.bookmarkData} category={category} tag={tag}/>
    </> :
    <div className="page-container">
        <h2>add your first bookmark!</h2>
        <p>This page will show your bookmarks, along with categories and tags to sort them by.</p>
        <Link to='/demo'>View Demo</Link>
    </div>
    }
    </main>
   </>
  );
}

export default Home;
