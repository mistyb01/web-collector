import React, {useState}  from 'react';
import { Link } from '../@types/app';
import EditBookmarks from './EditBookmarks';

interface Props {
    bookmarkName: string,
    bookmarkUrl: string,
    bookmarkCategory: string,
    bookmarkTag: string
}

export const EditorRow: React.FC<Props> = (props) => {

    const [showEditFields, setShowEditFields] = useState(false);

  return (
    <li className='editor-list__row'>
        {showEditFields ? 
        <>
        <input type="text" className="editing-input" value={props.bookmarkName}/>
        <input type="text" className="editing-input" value={props.bookmarkUrl}/>
        <input type="text" className="editing-input" value={props.bookmarkCategory}/>
        <input type="text" className="editing-input" value={props.bookmarkTag}/>
        </>
        : 
        <>
        <span>{props.bookmarkName}</span>
        <input type="text" value={props.bookmarkUrl}/>
        <span>{props.bookmarkCategory}</span>
        <span>{props.bookmarkTag}</span>
        </>}
        <div className="editor-options horizontal-space">
            <button onClick={() => setShowEditFields(!showEditFields)} className="editor-options__button editor-options__edit">
            {showEditFields ? 'close' : 'edit'}
            </button>
            <button className="editor-options__button editor-options__delete">{showEditFields ? 'cancel' : 'delete'}</button>
        </div>
    </li>
  );
}

export default EditorRow;
