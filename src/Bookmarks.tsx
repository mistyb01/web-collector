import React, { useRef } from "react";
import { BookmarkType } from "./@types/app";
var uniqid = require("uniqid");

interface Props {
  bookmarkData: BookmarkType[];
  category: string;
  tag: string;
}

export const Bookmarks: React.FC<Props> = (props) => {
  const bookmarkRef = useRef<HTMLAnchorElement | null>(null);

  const setFocus = () => {
    if (bookmarkRef.current !== null) bookmarkRef.current.focus();
  };

  let filteredBookmarks = props.bookmarkData;
  if (props.category !== "all") {
    filteredBookmarks = props.bookmarkData.filter(
      (bookmark) => bookmark.category === props.category
    );
  }
  if (props.tag !== "all") {
    filteredBookmarks = filteredBookmarks.filter(
      (bookmark) => bookmark.tag === props.tag
    );
  }

  return (
    <>
      <button className="skip-to-content" onClick={setFocus} tabIndex={1}>
        skip to bookmarks
      </button>
      <div className="bookmarks-container">
        <ul className="bookmarks-list">
          {filteredBookmarks.map((bookmark, i) => {
            return i === 0 ? (
              <li key={uniqid()} tabIndex={-1} className="bookmarks-list__item">
                <a href={bookmark.url} target="_blank" ref={bookmarkRef}>
                  {bookmark.name}
                </a>
              </li>
            ) : (
              <li key={uniqid()} tabIndex={-1} className="bookmarks-list__item">
                <a href={bookmark.url} target="_blank">
                  {bookmark.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Bookmarks;
