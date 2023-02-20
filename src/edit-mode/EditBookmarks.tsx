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
        <ul className="editor-list vertical-space">
            <li className="editor-list__heading horizontal-space">
                <span>name</span>
                <span>url</span>
                <span>category</span>
                <span>tags</span>
            </li>
        {filteredBookmarks.map((bookmark) => 
            <li className='horizontal-space'>
                <span>{bookmark.name}</span>
                <input type="text" value={bookmark.url}/>
                <span>{bookmark.category}</span>
                <span>{bookmark.tag}</span>
            </li>
        )}
        </ul>
    </div>
  );
}

export default EditBookmarks;
