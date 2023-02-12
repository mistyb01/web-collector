import React, { ReactEventHandler }  from 'react';
import { Link } from './@types/app';

interface Props {
    bookmarkData: Link[],
    handleCategoryChange: ReactEventHandler,
    handleTagChange: ReactEventHandler,
    category: string
  }
  
export const Tags: React.FC<Props> = (props) => {
    const filteredBookmarks = props.bookmarkData.filter((bookmark) => bookmark.category === props.category);
    const tags = Array.from(new Set(
        filteredBookmarks.map((bookmark) => bookmark.tag)
    ));

    return (
        <div className='tagslist'>
            <ul>
                {tags.map((tag) => {
                    return (<li onClick={props.handleTagChange} id={tag}>{tag}</li>);
                })}
            </ul>
      </div>
    )

}

export default Tags;