import React, {useState}  from 'react';
import { BookmarkType } from '../@types/app';
import EditBookmarks from './EditBookmarks';
import EditCategories from './EditCategories';
import EditTags from './EditTags';
import { Link } from 'react-router-dom';

interface Props {
    bookmarkData: BookmarkType[],
    updateBookmarkData: Function,
}

export const EditMode: React.FC<Props> = (props) => {
    const [mode, setMode] = useState('bookmarks');
    const categoryList = Array.from(new Set(props.bookmarkData.map(bookmark => bookmark.category)));

    return (
        <div className="page-container vertical-space">
            <div className="header-buttons">
                <Link to='/'><button className="header__button" onClick={() => {}}>Close</button></Link>
            </div>
            <h2>EDITOR</h2>
            <ul className='horizontal-space'>
                <button className={`${mode === 'bookmarks' ? 'button--selected' : ''}`} onClick={() => setMode('bookmarks')}>Bookmarks</button>
                <button className={`${mode === 'tags' ? 'button--selected' : ''}`} onClick={() => setMode('tags')}>Tags</button>
                <button className={`${mode === 'categories' ? 'button--selected' : ''}`} onClick={() => setMode('categories')}>Categories</button>
            </ul>
            {mode === 'bookmarks' ? <EditBookmarks updateBookmarkData={props.updateBookmarkData} bookmarkData={props.bookmarkData} categoryList={categoryList}/> :
            mode === 'tags' ? <EditTags/> : 
            mode === 'categories' ? <EditCategories updateBookmarkData={props.updateBookmarkData} bookmarkData={props.bookmarkData} categoryList={categoryList}/> : <></>}
        </div>     
  );
}

export default EditMode;
