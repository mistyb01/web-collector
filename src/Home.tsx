import React, { useState, useEffect, useRef } from "react";
import Bookmarks from "./Bookmarks";
import Tags from "./Tags";
import Categories from "./Categories";
import { BookmarkType } from "./@types/app";
import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

interface Props {
  bookmarkData: BookmarkType[];
}

export const Home: React.FC<Props> = (props) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [tag, setTag] = useState("all");

  //solution: category is no longer a piece of state that gets passed around.
  // instead, the category index is state. the current category is then computed based off it.
  function handleCategoryChange(e: React.MouseEvent<HTMLButtonElement>) {
    let newIndex = categoryList.indexOf(e.currentTarget.id);
    setCategoryIndex(newIndex);
    setTag("all");
  }

  function handleTagChange(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.id === tag) {
      setTag("all");
    } else {
      setTag(e.currentTarget.id);
    }
  }

  const categoryList = Array.from(
    new Set(props.bookmarkData.map((bookmark) => bookmark.category))
  );
  const category = categoryList[categoryIndex];

  let hasSavedData = localStorage.getItem("bookmarkData") !== null;

  return (
    <AnimatedPage>
      <header className="vertical-space">
        <h1 className="header-logo">web collector</h1>

        <div className="header-buttons horizontal-space">
          {
            <>
              <Link to="/add" tabIndex={-1}>
                <button className="header__button">add bookmark</button>
              </Link>
              {hasSavedData && (
                <Link to="/edit" tabIndex={-1}>
                  <button className="header__button">edit</button>
                </Link>
              )}
            </>
          }
        </div>
      </header>
      {hasSavedData ? (
        <main className="home-container">
          <div className="filter-menu">
            <h3 className="filter-menu__header">categories</h3>
            <Categories
              categoryList={categoryList}
              category={category}
              handleCategoryChange={handleCategoryChange}
            />

            <h3 className="filter-menu__header">filters</h3>
            <Tags
              bookmarkData={props.bookmarkData}
              category={category}
              tag={tag}
              handleTagChange={handleTagChange}
            />
          </div>
          <Bookmarks
            bookmarkData={props.bookmarkData}
            category={category}
            tag={tag}
          />
        </main>
      ) : (
        <div className="first-screen page-container vertical-space">
          <h2>save your first bookmark!</h2>
          <p>
            This page will show your bookmarks, <br />
            along with categories and tags to sort them by.
          </p>
          <div className="horizontal-space">
            <Link to="/add">
              <button className="form-button">add bookmark</button>
            </Link>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default Home;
