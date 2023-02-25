import React, { ReactEventHandler }  from 'react';
var uniqid = require('uniqid');

interface Props {
    categoryList: string[];
    category: string;
    handleCategoryChange: ReactEventHandler;
  }
  
export const Categories: React.FC<Props> = (props) => {
 
    return (
        <div className='categories vertical-space'>
        {props.categoryList.map((category) => {
          if (category === props.category) {
         return (<button key={uniqid()}  className='category-button button--selected' id={category} onClick={props.handleCategoryChange}>{category}</button>);
          }
         return (<button key={uniqid()}  className='category-button' id={category} onClick={props.handleCategoryChange}>{category}</button>);
        })}
      </div>
    )

}

export default Categories;