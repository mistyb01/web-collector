import React, {useState, useEffect}  from 'react';
import { Link } from '../@types/app';
import EditBookmarks from './EditBookmarks';

interface Props {
    bookmarkId: number,
    bookmarkName: string,
    bookmarkUrl: string,
    bookmarkCategory: string,
    bookmarkTag: string,
    handleEditBookmarks: Function,
    handleDeleteBookmark: Function
}

export const EditorRow: React.FC<Props> = (props) => {

    const [showEditFields, setShowEditFields] = useState(false);
    
    const [newName, setName] = useState(props.bookmarkName);
    const [newUrl, setUrl] = useState(props.bookmarkUrl);
    const [newCategory, setCategory] = useState(props.bookmarkCategory);
    const [newTag, setTag] = useState(props.bookmarkTag);

    function handleEdit() {
        let newValues = {id: props.bookmarkId, name: newName, url: newUrl, category: newCategory, tag: newTag}
        props.handleEditBookmarks(newValues);
        setShowEditFields(false);
    }

  return (
    <li className='editor-list__row'>
        {showEditFields ? 
        <>
        <input type="text" onChange={(e) => setName(e.target.value)} className="editing-input" value={newName}/>
        <input type="text" onChange={(e) => setUrl(e.target.value)} className="editing-input" value={newUrl}/>
        <input type="text" onChange={(e) => setCategory(e.target.value)} className="editing-input" value={newCategory}/>
        <input type="text" onChange={(e) => setTag(e.target.value)} className="editing-input" value={newTag}/>
        <div className="editor-options horizontal-space">
            <button onClick={handleEdit} className="editor-options__button">save</button>
            <button onClick={() => setShowEditFields(false)} className="editor-options__button">cancel</button>
        </div>
        </>
        : 
        <>
        <span>{props.bookmarkName}</span>
        <input type="text" value={props.bookmarkUrl}/>
        <span>{props.bookmarkCategory}</span>
        <span>{props.bookmarkTag}</span>
        <div className="editor-options horizontal-space">
            <button onClick={() => setShowEditFields(true)} className="editor-options__button">edit</button>
            <button onClick={() => props.handleDeleteBookmark(props.bookmarkId)} className="editor-options__button">delete</button>
        </div>
        </>
        }
       
    </li>
  );
}

export default EditorRow;
