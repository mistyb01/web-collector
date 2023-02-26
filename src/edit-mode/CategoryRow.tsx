import React, {useState}  from 'react';
import EditBookmarks from './EditBookmarks';
import { BookmarkType } from '../@types/app';

interface Props {
  category: string,
  handleRenameCategory: Function
}

export const CategoryRow: React.FC<Props> = (props) => {

    const [showEditFields, setShowEditFields] = useState(false);
    const [newName, setName] = useState(props.category);

  return (
    <>
    <li className='editor-list__row'>
        {showEditFields ?
        <>
        <input type="text" onChange={(e) => setName(e.target.value)} className="editing-input" value={newName}/>
        <div className="editor-options horizontal-space">
            <button onClick={()=>{props.handleRenameCategory(props.category, newName); setShowEditFields(false)}} className="editor-options__button">submit</button>
            <button onClick={()=>setShowEditFields(false)} className="editor-options__button">close</button>
        </div>
        </>
        :
        <>
        {props.category}
        <div className="editor-options horizontal-space">
            <button onClick={()=>setShowEditFields(true)} className="editor-options__button">rename</button>
            <button className="editor-options__button">delete</button>
        </div>
        </>
        }
    </li>
    
    </>
        
   
  );
}

export default CategoryRow;
