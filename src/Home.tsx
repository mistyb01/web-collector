import React, { useState, ReactEventHandler }  from 'react';
import Bookmarks from './Bookmarks';
import Tags from './Tags';
import Categories from './Categories';
import { BookmarkType } from './@types/app';
import { Link } from 'react-router-dom';

interface Props {
  bookmarkData: BookmarkType[],
  categoryList: string[],
}

export const Home: React.FC<Props> = (props) => {
    const [category, setCategory] = useState('code');
    const [tag, setTag] = useState('all');
     
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
          <Categories 
            categoryList={props.categoryList} 
            category={category} 
            handleCategoryChange={handleCategoryChange}/>
          <div className="header-buttons horizontal-space">
              <Link to='/add'><button className="header__button">add bookmark</button></Link>
              <Link to='/edit'><button className="header__button">edit</button></Link>  
          </div>
        </header>
    <main className="main-container horizontal-space">
    <div className="filter-menu">
            <h3 className="filter-menu__header">filters</h3>
            <Tags 
                bookmarkData={props.bookmarkData} 
                category={category} 
                tag={tag} 
                handleTagChange={handleTagChange} />
          </div>
    <Bookmarks bookmarkData={props.bookmarkData} category={category} tag={tag}/>
    </main>
   </>
  );
}

export default Home;
