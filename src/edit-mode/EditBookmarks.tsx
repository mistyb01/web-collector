import React, { useState } from 'react';
import { Link } from '../@types/app';
import Select from 'react-select';
import EditorRow from './EditorRow';

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

    function updateBookmarkData(newValues: Link) {
        const editingBookmark = props.bookmarkData.find(element => element.id === newValues.id);
        if (editingBookmark) {
            editingBookmark.name = newValues.name;
            editingBookmark.url = newValues.url;
            editingBookmark.category = newValues.category;
            editingBookmark.tag = newValues.tag;
        }
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
            <EditorRow 
                bookmarkId={bookmark.id} 
                bookmarkName={bookmark.name}  
                bookmarkUrl={bookmark.url} 
                bookmarkCategory={bookmark.category} 
                bookmarkTag={bookmark.tag}
                updateBookmarkData={updateBookmarkData}
            />
        )}
        </ul>
    </div>
  );
}

export default EditBookmarks;
