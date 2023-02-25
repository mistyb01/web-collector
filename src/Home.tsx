import React, { useState, ReactEventHandler }  from 'react';
import Bookmarks from './Bookmarks';
import Tags from './Tags';
import { BookmarkType } from './@types/app';

interface Props {
  bookmarkData: BookmarkType[],
  category: string,
  tag: string,
  handleTagChange: ReactEventHandler
}

export const Home: React.FC<Props> = (props) => {
  return (
   <>
    <div className="filter-menu">
            <h3 className="filter-menu__header">filters</h3>
            <Tags 
                bookmarkData={props.bookmarkData} 
                category={props.category} 
                tag={props.tag} 
                handleTagChange={props.handleTagChange} />
          </div>
    <Bookmarks bookmarkData={props.bookmarkData} category={props.category} tag={props.tag}/>

   </>
  );
}

export default Home;
