import React, { ReactEventHandler }  from 'react';
import { Link } from './@types/app';

interface Props {
    bookmarkData: Link[];
    category: string;
    handleCategoryChange: ReactEventHandler;
  }
  
export const Categories: React.FC<Props> = (props) => {
    
  const categories = Array.from(new Set(
    props.bookmarkData.map((bookmark) => bookmark.category)
    ));

    return (
        <div className='categories horizontal-space'>
        {categories.map((category) => {
          if (category === props.category) {
         return (<button className='categories__button categories__button--selected' id={category} onClick={props.handleCategoryChange}>{category}</button>);
          }
         return (<button className='categories__button' id={category} onClick={props.handleCategoryChange}>{category}</button>);
        })}
      </div>
    )

}

export default Categories;