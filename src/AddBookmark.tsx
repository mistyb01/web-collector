import React, { FormEvent, ReactEventHandler, useState }  from 'react';
import { BookmarkType } from './@types/app';
import Creatable from 'react-select/creatable';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
var uniqid = require('uniqid'); 


interface Props {
    handleAddToBookmarks: Function;
    bookmarkData: BookmarkType[];
}
  
export const AddBookmark: React.FC<Props> = (props: Props) => {
    
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [selectedCategory, setCategory] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');    
    const [showCategoryInput, setShowCategoryInput] = useState(false);
    const navigate = useNavigate();

    const categoryList = Array.from(new Set(props.bookmarkData.map(bookmark => bookmark.category)));
    const filteredBookmarks = props.bookmarkData.filter(bookmark => bookmark.category === selectedCategory);
    const tags = Array.from(new Set(filteredBookmarks.map(bookmark => bookmark.tag)));

    function submitBookmark(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newBookmark:BookmarkType = {
            id: uniqid(), 
            name: name,
            url: url,
            description: description,
            category: selectedCategory,
            tag: tag
        }
        props.handleAddToBookmarks(newBookmark);
        setName('');
        setUrl('');
        setCategory('');
        setTag('');
        setDescription('');
        navigate('/');
    }

    return (
        <AnimatedPage>
        <div className='page-container vertical-space'>
            <div className="editor-header-buttons horizontal-space">
                <Link to='/'><button className="header__button">close</button></Link>
            </div>
            <h2>new bookmark</h2>
            <form onSubmit={submitBookmark} className='add-bookmark__form vertical-space'>
                    <label className='add-bookmark__label'>
                        <span>Name of Page</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
                    </label>
                    <label className='add-bookmark__label'>
                        <span>URL</span>
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                    </label>
                    <label className='add-bookmark__label vertical-space'>
                        <span>Category</span>
                        <div className='add-bookmark__category-options horizontal-space '>
                            <label className="radio-label category-option category-option--new"><input type="radio" name="category" value="new" checked={showCategoryInput} onChange={() => {setCategory(''); setShowCategoryInput(!showCategoryInput)}} />
                            +</label>
                            {(localStorage.getItem('bookmarkData') !== null) && categoryList.map((category) => {
                                return (
                                    <label key={uniqid()} 
                                    className={`${category === selectedCategory ? 'radio-label--selected radio-label category-option' : 'radio-label category-option'}`}>
                                    <input 
                                    type="radio" 
                                    name="category" 
                                    value={category} 
                                    onChange={(e) => {setShowCategoryInput(false); setCategory(e.target.value)}}
                                    />
                                    {category}</label> 
                                )
                            })}
                            </div>
                        {showCategoryInput && <input type="text" value={selectedCategory} onChange={(e) => setCategory(e.target.value)} />}
                    </label>
                    <label className='add-bookmark__label'>
                        <span>Tags</span>
                        <Creatable
                            options={tags.map(tag => ({label: tag, value: tag}))}
                            onChange={(opt) => setTag(opt!.value)}/>
                    </label>
                    <label className='add-bookmark__label'>
                        <span>Description (optional)</span>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </label>
                <button type="submit" className="form-button">submit</button>
            </form>
        </div>
        </AnimatedPage>
    )

}

export default AddBookmark;