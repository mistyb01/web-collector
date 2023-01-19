import React, { useState }  from 'react';

interface Props {
  bookmarkData: {name: string, url: string, category: string}[];
}

// React.FC<Props> specifies that Bookmarks is a functional component.
export const Bookmarks: React.FC<Props> = ({bookmarkData}) => {
  const [category, setCategory] = useState('fun');

  function handleCategoryChange(e: React.MouseEvent<HTMLButtonElement>) {
    setCategory(e.currentTarget.id);
  }

  return (
    <div className="bookmarks-container">
      <div className='category-buttons'>
        <button id="reference" onMouseEnter={handleCategoryChange}>reference</button>
        <button id="courses" onMouseEnter={handleCategoryChange}>courses</button>
        <button id="fun" onMouseEnter={handleCategoryChange}>fun</button>
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
