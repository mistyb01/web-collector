import React from 'react';
import { BookmarkType } from '../@types/app';
import CategoryTagRow from './CategoryTagRow';
var uniqid = require('uniqid'); 

interface Props {
  bookmarkData: BookmarkType[],
  categoryList: string[],
  updateBookmarkData: Function
}

export const EditCategories: React.FC<Props> = (props) => {

  function handleRenameCategory(oldCategoryName:string, newCategoryName:string) {
    for (let i = 0; i < props.bookmarkData.length; i++) {
      if (props.bookmarkData[i].category == oldCategoryName) {
        props.bookmarkData[i].category = newCategoryName;
      }
    }
    props.updateBookmarkData(props.bookmarkData);
  }

  function handleDeleteCategory(categoryName:string) {
    // sort the array so all bookmarks of a category are together
    props.bookmarkData.sort(function(a,b){
      return a.category.localeCompare(b.category);
    })
    let startIndex = props.bookmarkData.findIndex(item=>item.category===categoryName);
    // for getting the # of bookmarks in that category
    let filteredByCategory = props.bookmarkData.filter((item) => item.category === categoryName);
    props.bookmarkData.splice(startIndex, filteredByCategory.length);
    props.updateBookmarkData(props.bookmarkData); 
  }


  return (
    
    <div className="edit-mode-container">
        <ul className="editor-list editor-list--category">
          <li className="editor-list__heading">
                  <span>category</span>
                  <span>options</span>
          </li>
          {props.categoryList.map((category) => 
            <CategoryTagRow 
              key={uniqid()}
              type="category"
              name={category} 
              handleRenameItem={handleRenameCategory}
              handleDeleteItem={handleDeleteCategory}/>
          )}
        </ul>
   
    </div>
  );
}

export default EditCategories;
