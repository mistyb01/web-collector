import React, {useState}  from 'react';
var uniqid = require('uniqid'); 


interface Props {
  type: string,
  name: string,
  handleRenameItem: Function,
  handleDeleteItem: Function
}

export const CategoryTagRow: React.FC<Props> = (props) => {

    const [showEditFields, setShowEditFields] = useState(false);
    const [newName, setName] = useState(props.name);
    const [showWarning, setShowWarning] = useState(false);

  return (
    <>
    <li className='editor-list__row'>
        {showEditFields ?
        <>
        <input key={uniqid()} type="text" onChange={(e) => setName(e.target.value)} className="editing-input" value={newName}/>
        <div className="editor-options horizontal-space">
            <button onClick={()=>{props.handleRenameItem(props.name, newName); setShowEditFields(false)}} className="editor-options__button">submit</button>
            <button onClick={()=>setShowEditFields(false)} className="editor-options__button">close</button>
        </div>
        </>
        :
        <>
        {props.name}
        <div className="editor-options horizontal-space">
            <button onClick={()=>setShowEditFields(true)} className="editor-options__button">rename</button>
            <button onClick={()=>setShowWarning(!showWarning)} className="editor-options__button">
                {showWarning ? 'nevermind' : 'delete'}
            </button>
        </div>
        </>}
    </li>
    {showWarning &&
        <div className="editor-list-warning horizontal-space">
            <span>Deleting this {props.type} will also delete all associated bookmarks.</span>
            <button 
                onClick={()=>props.handleDeleteItem(props.name)} 
                className="editor-options__button">
                Proceed
            </button>
        </div>}
    
    </>
        
   
  );
}

export default CategoryTagRow;
