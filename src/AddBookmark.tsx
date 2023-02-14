import React, { FormEvent, ReactEventHandler, useState }  from 'react';
import { Link } from './@types/app';

interface Props {
    handleAddToBookmarks: Function;
    closeForm: Function;
}
  
export const AddBookmark: React.FC<Props> = (props: Props) => {
    
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');


    function submitBookmark(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newBookmark:Link = {
            name: name,
            url: url,
            description: description,
            category: category,
            tag: tag
        }
        props.handleAddToBookmarks(newBookmark);
        setName('');
        setUrl('');
        setCategory('');
        setTag('');
        setDescription('');
        props.closeForm();
    }

    return (
        <div className='add-bookmark__container vertical-space'>
            <h2>new bookmark</h2>
            <form onSubmit={submitBookmark} className='add-bookmark__form vertical-space'>
                <div className='add-bookmark__row horizontal-space'>
                    <label className='add-bookmark__label'>
                        <span>Name of Page</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
                    </label>
                    <label className='add-bookmark__label'>
                        <span>URL</span>
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </label>
                </div>
                <div className='add-bookmark__row horizontal-space'>
                    <label className='add-bookmark__label'>
                        <span>Category</span>
                        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </label>
                    <label className='add-bookmark__label'>
                        <span>Tags</span>
                        <input type="text" value={tag} onChange={(e) => setTag(e.target.value)}/>
                    </label>
                </div>
                <div className='add-bookmark__row'>
                    <label className='add-bookmark__label'>
                        <span>Description (optional)</span>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </label>
                </div>
                <button type="submit" className="form-button">submit</button>
            </form>
        </div>
    )

}

export default AddBookmark;