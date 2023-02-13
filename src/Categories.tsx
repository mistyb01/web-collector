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
        <div className='categories horizontal-space'>
         {/* <button className='categories__button categories__button--star' id='star' onClick={props.handleCategoryChange}>✭</button> */}
        {categories.map((category) => {
         return (<button className='categories__button' id={category} onClick={props.handleCategoryChange}>{category}</button>);
        })}
      </div>
    )

}

export default Categories;