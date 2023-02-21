import React, { useState, useEffect } from 'react';
import { Link } from '../@types/app';
import Select from 'react-select';
import EditorRow from './EditorRow';

interface Props {
  bookmarkData: Link[],
  categoryList: string[],
  handleEditBookmarks: Function
}

export const EditBookmarks: React.FC<Props> = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredBookmarks, setFilteredBookmarks] = useState(props.bookmarkData);
 
    useEffect(() => {
        console.log('change');
        if (selectedCategory !== 'all') {
            setFilteredBookmarks(props.bookmarkData.filter(bookmark => bookmark.category === selectedCategory));
        }
    }, [selectedCategory])


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
                updateBookmarkData={(newValues: Link) => props.handleEditBookmarks(newValues)}
            />
        )}
        </ul>
    </div>
  );
}

export default EditBookmarks;
