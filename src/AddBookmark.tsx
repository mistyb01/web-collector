import React, { ReactEventHandler }  from 'react';

interface Props {
  }
  
export const AddBookmark: React.FC<Props> = (props) => {
 

    return (
        <div className='add-bookmark__container vertical-space'>
            <h2>new bookmark</h2>
            <form className='add-bookmark__form vertical-space'>
                <div className='add-bookmark__row horizontal-space'>
                    <label className='add-bookmark__label'>
                        <span>Name of Page</span>
                        <input type="text" />
                    </label>
                    <label className='add-bookmark__label'>
                        <span>URL</span>
                        <input type="text" />
                    </label>
                </div>
                <div className='add-bookmark__row horizontal-space'>
                    <label className='add-bookmark__label'>
                        <span>Category</span>
                        <input type="text" />
                    </label>
                    <label className='add-bookmark__label'>
                        <span>Tags</span>
                        <input type="text" />
                    </label>
                </div>
                <button type="submit" className="form-button">submit</button>
            </form>
        </div>
    )

}

export default AddBookmark;