import React, { ReactEventHandler }  from 'react';

interface Props {
  }
  
export const AddBookmark: React.FC<Props> = (props) => {
 

    return (
        <div className='add-bookmark__container'>
            <form>
                <label>
                    <span>Name of Page</span>
                    <input type="text" />
                </label>
                <label>
                    <span>URL</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Category</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Tags</span>
                    <input type="text" />
                </label>
            </form>
        </div>
    )

}

export default AddBookmark;