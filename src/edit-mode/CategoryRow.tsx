import React, {useState}  from 'react';
import EditBookmarks from './EditBookmarks';
import { BookmarkType } from '../@types/app';

interface Props {
  category: string
}

export const CategoryRow: React.FC<Props> = (props) => {


  return (
    <>
    <li className='editor-list__row'>
        {props.category}
        <div className="editor-options horizontal-space">
            <button className="editor-options__button">rename</button>
            <button className="editor-options__button">delete</button>
        </div>
    </li>
    
    </>
        
        
   
  );
}

export default CategoryRow;
