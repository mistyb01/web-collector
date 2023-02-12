import React, { useState }  from 'react';
import { Link } from './@types/app';

interface Props {
  bookmarkData: Link[];
}

// React.FC<Props> specifies that Bookmarks is a functional component.
export const Bookmarks: React.FC<Props> = ({bookmarkData}) => {
  const [category, setCategory] = useState('code');

  function handleCategoryChange(e: React.MouseEvent<HTMLButtonElement>) {
    setCategory(e.currentTarget.id);
  }

  const categories = Array.from(new Set(
    bookmarkData.map((bookmark) => bookmark.category)
    ));

  return (
    <div className="bookmarks-container">
      <div className='category-buttons'>
        {categories.map((category) => {
         return (<button id={category} onMouseEnter={handleCategoryChange}>{category}</button>);
        })}
      </div>
      <ul className="bookmarks-list">
        {bookmarkData.map((bookmark) => {
          if (bookmark.category === category) {
            return (
              <li>
                <a href={bookmark.url} target="_blank">{bookmark.name}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Bookmarks;
