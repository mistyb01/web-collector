import React  from 'react';
import { BookmarkType } from './@types/app';
var uniqid = require('uniqid');

interface Props {
  bookmarkData: BookmarkType[],
  category: string,
  tag: string
}

export const Bookmarks: React.FC<Props> = (props) => {
  let filteredBookmarks = props.bookmarkData;
  if (props.category !== 'all') {
   filteredBookmarks = props.bookmarkData.filter((bookmark) => bookmark.category === props.category);
  }
  if (props.tag !== 'all') {
    filteredBookmarks = filteredBookmarks.filter((bookmark) => bookmark.tag === props.tag)
  }

  return (
    <div className="bookmarks-container">
      <ul className="bookmarks-list">
        {filteredBookmarks.map((bookmark) => {
            return (
              <li key={uniqid()} className="bookmarks-list__item">
                <a href={bookmark.url} target="_blank">{bookmark.name}</a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Bookmarks;
