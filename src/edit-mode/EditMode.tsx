import React, {useState}  from 'react';
import { Link } from '../@types/app';
import EditBookmarks from './EditBookmarks';
import EditCategories from './EditCategories';
import EditTags from './EditTags';

interface Props {
    bookmarkData: Link[],
    categoryList: string[]
}

export const EditMode: React.FC<Props> = (props) => {
    const [mode, setMode] = useState('bookmarks');

  return (
    <div className="edit-mode-container vertical-space">
        <h2>EDITOR</h2>
        <ul className='horizontal-space'>
            <button className={`${mode === 'bookmarks' ? 'header__button header__button--selected' : 'header__button'}`} onClick={() => setMode('bookmarks')}>Bookmarks</button>
            <button className={`${mode === 'tags' ? 'header__button header__button--selected' : 'header__button'}`} onClick={() => setMode('tags')}>Tags</button>
            <button className={`${mode === 'categories' ? 'header__button header__button--selected' : 'header__button'}`} onClick={() => setMode('categories')}>Categories</button>
        </ul>
        {mode === 'bookmarks' ? <EditBookmarks bookmarkData={props.bookmarkData} categoryList={props.categoryList}/> :
        mode === 'tags' ? <EditTags/> : 
        mode === 'categories' ? <EditCategories/> : <></>}
    </div>
  );
}

export default EditMode;
