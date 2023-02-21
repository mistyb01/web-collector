import React, { useState } from 'react';
import { Link } from '../@types/app';
import Select from 'react-select';

interface Props {
  bookmarkData: Link[],
  categoryList: string[]
}

export const EditBookmarks: React.FC<Props> = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('all');

    let filteredBookmarks = props.bookmarkData;
    if (selectedCategory !== 'all') {
        filteredBookmarks = props.bookmarkData.filter(bookmark => bookmark.category === selectedCategory);
    }

    return (
    <div className="edit-bookmarks-container vertical-space">
        <Select 
            options={
                props.categoryList.map(category => ({label: category, value: category}))}
            onChange={(opt) => setSelectedCategory(opt!.value)}
            placeholder={'filter by category'}
        />
        <ul className="editor-list">
            <li className="editor-list__heading">
                <span>name</span>
                <span>url</span>
                <span>category</span>
                <span>tags</span>
                <span>options</span>
            </li>
        {filteredBookmarks.map((bookmark) => 
            <li className='editor-list__row'>
                <span>{bookmark.name}</span>
                <input type="text" value={bookmark.url}/>
                <span>{bookmark.category}</span>
                <span>{bookmark.tag}</span>
                <div className="editor-options horizontal-space">
                    <button className="editor-options__button editor-options__edit">edit</button>
                    <button className="editor-options__button editor-options__delete">delete</button>
                </div>
            </li>
        )}
        </ul>
    </div>
  );
}

export default EditBookmarks;
