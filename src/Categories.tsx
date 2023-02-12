import React, { ReactEventHandler }  from 'react';
import { Link } from './@types/app';

interface Props {
    bookmarkData: Link[];
    handleCategoryChange: ReactEventHandler;
  }
  
export const Categories: React.FC<Props> = (props) => {
    
  const categories = Array.from(new Set(
    props.bookmarkData.map((bookmark) => bookmark.category)
    ));

    return (
        <div className='category-buttons'>
        {categories.map((category) => {
         return (<button id={category} onMouseEnter={props.handleCategoryChange}>{category}</button>);
        })}
      </div>
    )

}

export default Categories;