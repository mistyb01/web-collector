import React, { useState, ReactEventHandler }  from 'react';
import Bookmarks from './Bookmarks';
import Tags from './Tags';
import Categories from './Categories';
import { BookmarkType } from './@types/app';
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import { ReactComponent as ArrowLeft } from './assets/arrow-left.svg';

interface Props {
  bookmarkData: BookmarkType[],
  isDemo: boolean
}

export const Home: React.FC<Props> = (props) => {
  
  const categoryList = Array.from(new Set(props.bookmarkData.map(bookmark => bookmark.category)));
  const [category, setCategory] = useState(categoryList[0]);
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
   <AnimatedPage>
    {props.isDemo && 
    <Link to='/'>
      <div className="demo-exit">
        <ArrowLeft/>
        <span>exit demo</span>
      </div>
    </Link>}
    <header className="vertical-space">
          <h1 className="header-logo">web collector</h1>
            {props.bookmarkData.length !== 0 &&
          <div className="header-buttons horizontal-space">
            {props.isDemo ? 
            <>
            <Link to='/demo/add'><button className="header__button">add bookmark</button></Link>
            <Link to='/demo/edit'><button className="header__button">edit</button></Link>
            </>
            : 
            <>
            <Link to='/add'><button className="header__button">add bookmark</button></Link>
            <Link to='/edit'><button className="header__button">edit</button></Link>
            </>
            }
          </div>}
    </header>
    {props.bookmarkData.length !== 0 ?
    <main className="home-container">
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
    </main> :
    <div className="first-screen page-container vertical-space">
      <h2>add your first bookmark!</h2>
      <p>This page will show your bookmarks, <br/>along with categories and tags to sort them by.</p>
      <div className="horizontal-space">
        <Link to='/add'><button className="form-button">add bookmark</button></Link>
        <Link to='/demo'><button>View Demo</button></Link>
      </div>
    </div> }
   </AnimatedPage>
  );
}

export default Home;
