import React from 'react';

interface Props {
  bookmarkData: {name: string, url: string, category: string}[];
}

// React.FC<Props> specifies that Bookmarks is a functional component.
export const Bookmarks: React.FC<Props> = ({}) => {
  return (
    <div className="bookmarks-container">
        <ul className="bookmarks-list">
          <li><a href="https://developer.mozilla.org/en-US/" target="_blank">mdn web docs</a></li>
          </ul>
    </div>
  );
}

export default Bookmarks;
