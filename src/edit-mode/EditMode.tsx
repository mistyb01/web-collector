import React, {useState}  from 'react';
import { Link } from '../@types/app';
import EditBookmarks from './EditBookmarks';

interface Props {
}

export const EditMode: React.FC<Props> = (props) => {

    const [bookmarkMode, setBookmarkMode] = useState(true);
    const [tagMode, setTagMode] = useState(false);
    const [categoryMode, setCategoryMode] = useState(false);


  return (
    
    <div className="edit-mode-container">
        <h1>EDIT</h1>
        <ul>
            <button>Bookmarks</button>
            <button>Tags</button>
            <button>Categories</button>
        </ul>
        {bookmarkMode && <EditBookmarks/>}
    </div>
  );
}

export default EditMode;
