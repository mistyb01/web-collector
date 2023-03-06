import React, {FormEvent, useState}  from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

function handleSaveTheme(e: FormEvent) {
    e.preventDefault();
}

export const EditTheme: React.FC<Props> = (props) => {

    const [selectedTheme, setSelectedTheme] = useState('light');

    return (
        <div className="page-container vertical-space">
          <h3>change color theme</h3>
          <form className='vertical-space' onSubmit={handleSaveTheme}>
          <div className="palette-container horizontal-space">
            <input type='radio' name='palette' id='light' value='light' checked={selectedTheme === 'light'}
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='light'>light</label>
            <ul className="palette-list">
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
            </ul>
          </div>

          <div className="palette-container horizontal-space">
            <input type='radio' name='palette' id='pink' value='pink' checked={selectedTheme === 'pink'} 
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='pink'>pink</label>
            <ul className="palette-list">
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
            </ul>
          </div>

          
          <div className="palette-container horizontal-space">
            <input type='radio' name='palette' id='darkBlue' value='darkBlue' checked={selectedTheme === 'darkBlue'} 
                onChange={(e) => setSelectedTheme(e.target.value)}/>
            <label htmlFor='darkBlue'>dark blue</label>
            <ul className="palette-list">
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
                <li className='palette-list__color'></li>
            </ul>
          </div>
          <button type='submit'>save</button>
          </form>

        </div>     
  );
}

export default EditTheme;
