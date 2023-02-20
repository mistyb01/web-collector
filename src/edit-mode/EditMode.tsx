import React, {useState}  from 'react';
import { Link } from '../@types/app';
import EditBookmarks from './EditBookmarks';
import EditCategories from './EditCategories';
import EditTags from './EditTags';

interface Props {
}

export const EditMode: React.FC<Props> = (props) => {

    const [mode, setMode] = useState('bookmarks');


  return (
    <div className="edit-mode-container">
        <h2>EDIT</h2>
        <ul>
            <button onClick={() => setMode('bookmarks')}>Bookmarks</button>
            <button onClick={() => setMode('tags')}>Tags</button>
            <button onClick={() => setMode('categories')}>Categories</button>
        </ul>
        {mode === 'bookmarks' ? <EditBookmarks/> :
        mode === 'tags' ? <EditTags/> : 
        mode === 'categories' ? <EditCategories/> : <></>}
    </div>
  );
}

export default EditMode;
