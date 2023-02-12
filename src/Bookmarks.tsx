import React  from 'react';
import { Link } from './@types/app';

interface Props {
  bookmarkData: Link[],
  category: string,
  tag: string
}

// React.FC<Props> specifies that Bookmarks is a functional component.
export const Bookmarks: React.FC<Props> = (props) => {
  let filteredBookmarks = props.bookmarkData.filter((bookmark) => bookmark.category === props.category);
  if (props.tag !== 'all') {
    filteredBookmarks = filteredBookmarks.filter((bookmark) => bookmark.tag === props.tag)
  }

  return (
    <div className="bookmarks-container">
      <ul className="bookmarks-list">
        {filteredBookmarks.map((bookmark) => {
            return (
              <li>
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
