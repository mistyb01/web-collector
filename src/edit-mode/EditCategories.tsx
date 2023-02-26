import React, {useState}  from 'react';
import { BookmarkType } from '../@types/app';
import CategoryRow from './CategoryRow';

interface Props {
  bookmarkData: BookmarkType[],
  categoryList: string[],
  updateBookmarkData: Function
}

export const EditCategories: React.FC<Props> = (props) => {


  return (
    
    <div className="edit-mode-container">
        <ul className="editor-list editor-list--category">
          <li className="editor-list__heading">
                  <span>category</span>
                  <span>options</span>
          </li>
          {props.categoryList.map((category) => 
            <CategoryRow category={category}/>
          )}
        </ul>
   
    </div>
  );
}

export default EditCategories;
