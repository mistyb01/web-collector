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


  return (
    <li className='editor-list__row'>
        <span>{props.bookmarkName}</span>
        <input type="text" value={props.bookmarkUrl}/>
        <span>{props.bookmarkCategory}</span>
        <span>{props.bookmarkTag}</span>
        <div className="editor-options horizontal-space">
            <button className="editor-options__button editor-options__edit">edit</button>
            <button className="editor-options__button editor-options__delete">delete</button>
        </div>
    </li>
  );
}

export default EditorRow;
