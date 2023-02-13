import React, { ReactEventHandler }  from 'react';
import { Link } from './@types/app';

interface Props {
    bookmarkData: Link[],
    category: string,
    tag: string,
    handleTagChange: ReactEventHandler
  }
  
export const Tags: React.FC<Props> = (props) => {
    const filteredBookmarks = props.bookmarkData.filter((bookmark) => bookmark.category === props.category);
    const tags = Array.from(new Set(
        filteredBookmarks.map((bookmark) => bookmark.tag)
    ));

    return (
        <div>
            <ul className='tags-list'>
                {tags.map((tag) => {
                    if (tag === props.tag) {
                        return (<li className='tags-list__item tags-list__item--selected' onClick={props.handleTagChange} id={tag}>{tag}</li>);
                    } 
                    return (<li className='tags-list__item' onClick={props.handleTagChange} id={tag}>{tag}</li>);
                })}
            </ul>
      </div>
    )

}

export default Tags;