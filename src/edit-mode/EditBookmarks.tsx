import React, { useState } from 'react';
import { Link } from '../@types/app';
import Select from 'react-select';

interface Props {
  bookmarkData: Link[],
  categoryList: string[]
}

export const EditBookmarks: React.FC<Props> = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('');
    
  return (
    <div className="edit-bookmarks-container">
        <Select 
            options={
                props.categoryList.map(category => ({label: category, value: category}))}
            onChange={(opt) => setSelectedCategory(opt!.value)}
            placeholder={'filter by category'}
        />
    </div>
  );
}

export default EditBookmarks;
