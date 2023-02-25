import React, { useState, useEffect } from 'react';
import { BookmarkType } from '../@types/app';
import Select from 'react-select';
import EditorRow from './EditorRow';

interface Props {
  bookmarkData: BookmarkType[],
  categoryList: string[],
  updateBookmarkData: Function
}

export const EditBookmarks: React.FC<Props> = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('all');

    let filteredBookmarks = props.bookmarkData;
    if (selectedCategory !== 'all') {
        filteredBookmarks = filteredBookmarks.filter(bookmark => bookmark.category === selectedCategory);
    }
  
    function handleEditBookmarks(newValues:BookmarkType) {
        const editingBookmark = props.bookmarkData.find(element => element.id === newValues.id);
        if (editingBookmark) {
            editingBookmark.name = newValues.name;
            editingBookmark.url = newValues.url;
            editingBookmark.category = newValues.category;
            editingBookmark.tag = newValues.tag;
        }
        props.updateBookmarkData(props.bookmarkData);
      }

    function handleDeleteBookmark(id:number) {
        const bookmarkToDelete = props.bookmarkData.findIndex(element => element.id === id);
        props.bookmarkData.splice(bookmarkToDelete, 1);
        props.updateBookmarkData(props.bookmarkData);
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
                key={bookmark.id}
                bookmarkId={bookmark.id} 
                bookmarkName={bookmark.name}  
                bookmarkUrl={bookmark.url} 
                bookmarkCategory={bookmark.category} 
                bookmarkTag={bookmark.tag}
                handleEditBookmarks={handleEditBookmarks}
                handleDeleteBookmark={handleDeleteBookmark}
            />
        )}
        </ul>
    </div>
  );
}

export default EditBookmarks;
